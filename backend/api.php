<?php
declare(strict_types=1);
// This file and its SQLite database live outside every public document root.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = getenv('CPPFUN_ORIGIN') ?: 'https://cppfun.hiyamax.com';
$testing = getenv('CPPFUN_TEST') === '1';
if ($origin === $allowed) {
    header('Access-Control-Allow-Origin: '.$allowed);
    header('Access-Control-Allow-Credentials: true');
    header('Vary: Origin');
}
function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function cookieToken(string $value, int $expires): void {
    global $testing;
    setcookie($testing ? 'cppfun_test' : '__Host-cppfun', $value, [
        'expires'=>$expires, 'path'=>'/', 'secure'=>!$testing,
        'httponly'=>true, 'samesite'=>'Strict'
    ]);
}
$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'OPTIONS') {
    if ($origin !== $allowed) reply(403, ['error'=>'不允许的来源']);
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
    http_response_code(204); exit;
}
if (!in_array($method, ['GET','POST','PUT','DELETE'], true)) reply(405, ['error'=>'不支持的请求']);
if ($method !== 'GET' && $origin !== $allowed) reply(403, ['error'=>'不允许的来源']);
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = preg_replace('#^/cppfun-api#', '', $path);
$dbPath = getenv('CPPFUN_DB') ?: '/opt/cppfun-private/progress.sqlite';
try {
    $db = new PDO('sqlite:'.$dbPath, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
    $db->exec('PRAGMA busy_timeout=5000');
    $now = time();
    $token = $_COOKIE[$testing ? 'cppfun_test' : '__Host-cppfun'] ?? '';
    $s = $db->prepare('SELECT sessions.*, users.name FROM sessions JOIN users ON users.id=sessions.user_id WHERE token_hash=? AND expires>?');
    $s->execute([hash('sha256', $token), $now]);
    $session = $s->fetch(PDO::FETCH_ASSOC) ?: null;
    if ($path === '/session' && $method === 'GET') {
        if (!$session) reply(200, ['user'=>null]);
        $q=$db->prepare('SELECT storage_key, value, revision FROM progress WHERE user_id=?');
        $q->execute([$session['user_id']]); $records=[];
        foreach ($q as $r) $records[$r['storage_key']]=['value'=>$r['value'],'revision'=>(int)$r['revision']];
        reply(200, ['user'=>['name'=>$session['name']], 'csrf'=>$session['csrf'], 'records'=>$records]);
    }
    $data=[];
    if (in_array($method, ['POST','PUT'], true)) {
        if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) reply(415, ['error'=>'需要 JSON 请求']);
        $raw=file_get_contents('php://input', false, null, 0, 16385);
        if (strlen($raw)>16384) reply(413, ['error'=>'请求太大']);
        $data=json_decode($raw,true);
        if (!is_array($data)) reply(400, ['error'=>'请求格式错误']);
    }
    if ($path === '/login' && $method === 'POST') {
        $ip=hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
        $db->prepare('DELETE FROM attempts WHERE at<?')->execute([$now-900]);
        $q=$db->prepare('SELECT COUNT(*) FROM attempts WHERE ip=?');$q->execute([$ip]);
        if ((int)$q->fetchColumn()>=10) reply(429, ['error'=>'尝试次数过多，请15分钟后重试']);
        $db->prepare('INSERT INTO attempts(ip,at) VALUES(?,?)')->execute([$ip,$now]);
        $name=strtolower(trim((string)($data['name'] ?? '')));
        $password=(string)($data['password'] ?? '');
        $q=$db->prepare('SELECT * FROM users WHERE lower(name)=?');$q->execute([$name]);$u=$q->fetch(PDO::FETCH_ASSOC);
        $valid=password_verify(substr($password,0,256), $u ? $u['password_hash'] : '$2y$12$ABCDEFGHIJKLMNOPQRSTUuxB7ZJkBmQQoLmBV72FaWrXmqoDExVOO');
        if (!$u || !$valid || strlen($password)>256) reply(401, ['error'=>'账号或密码不正确']);
        if ($session) $db->prepare('DELETE FROM sessions WHERE token_hash=?')->execute([$session['token_hash']]);
        $newToken=bin2hex(random_bytes(32));$csrf=bin2hex(random_bytes(32));
        $db->prepare('DELETE FROM sessions WHERE expires<?')->execute([$now]);
        $db->prepare('INSERT INTO sessions(token_hash,user_id,csrf,expires) VALUES(?,?,?,?)')->execute([hash('sha256',$newToken),$u['id'],$csrf,$now+604800]);
        cookieToken($newToken,$now+604800);
        reply(200,['user'=>['name'=>$u['name']]]);
    }
    if (!$session) reply(401,['error'=>'请先登录']);
    if (!hash_equals($session['csrf'], $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) reply(403,['error'=>'登录校验失效，请刷新页面']);
    if ($path === '/logout' && $method === 'POST') {
        $db->prepare('DELETE FROM sessions WHERE token_hash=?')->execute([$session['token_hash']]);
        cookieToken('',1);reply(200,['ok'=>true]);
    }
    if ($path === '/password' && $method === 'POST') {
        $q=$db->prepare('SELECT password_hash FROM users WHERE id=?');$q->execute([$session['user_id']]);
        $old=(string)($data['oldPassword'] ?? '');$new=(string)($data['newPassword'] ?? '');
        if (!password_verify($old,$q->fetchColumn())) reply(401,['error'=>'当前密码不正确']);
        if (strlen($new)<6 || strlen($new)>72) reply(400,['error'=>'新密码需要6–72个字符，支持纯数字']);
        $db->beginTransaction();
        $db->prepare('UPDATE users SET password_hash=? WHERE id=?')->execute([password_hash($new,PASSWORD_BCRYPT,['cost'=>12]),$session['user_id']]);
        $db->prepare('DELETE FROM sessions WHERE user_id=?')->execute([$session['user_id']]);
        $db->commit();cookieToken('',1);reply(200,['ok'=>true]);
    }
    if (preg_match('#^/progress/([^/]+)$#',$path,$m) && $method === 'PUT') {
        $key=rawurldecode($m[1]);
        $course=null;$kind=null;
        if ($key==='cpp-fun-lesson1-v1') {$course=1;$kind='first';}
        elseif (preg_match('/^cpp-course-(\d{2})$/',$key,$k)) {$course=(int)$k[1];$kind='reading';}
        elseif (preg_match('/^cpp-explore-(\d{2})-v1$/',$key,$k)) {$course=(int)$k[1];$kind='explore';}
        elseif (preg_match('/^cpp-understanding-(0[2-5])$/',$key,$k)) {$course=(int)$k[1];$kind='passed';}
        elseif (preg_match('/^cpp-challenge-([2-5])$/',$key,$k)) {$course=(int)$k[1];$kind='passed';}
        if (!$course || $course>83 || ($kind==='explore' && $course<6) || ($kind==='reading' && $course<2)) reply(400,['error'=>'课程记录无效']);
        $value=$data['value'] ?? null;
        $revision=$data['revision'] ?? null;
        if (!is_int($revision) || $revision<0 || (!is_string($value) && $value!==null)) reply(400,['error'=>'进度格式无效']);
        if ($value!==null) {
            $v=json_decode($value,true);$valid=false;
            $bools=function($a,$n) {return is_array($a)&&array_keys($a)===range(0,$n-1)&&count($a)===$n&&count(array_filter($a,'is_bool'))===$n;};
            if ($kind==='reading') $valid=$bools($v,4);
            if ($kind==='passed') $valid=$value==='passed';
            if ($kind==='explore') $valid=is_array($v)&&count($v)===2&&isset($v['challenge'],$v['quiz'])&&is_bool($v['challenge'])&&$bools($v['quiz'],2);
            if ($kind==='first') $valid=is_array($v)&&count($v)===4&&isset($v['read'],$v['robot'],$v['tools'],$v['quiz'])&&is_bool($v['read'])&&is_bool($v['robot'])&&$bools($v['tools'],3)&&$bools($v['quiz'],3);
            if (!$valid) reply(400,['error'=>'进度内容无效']);
        }
        $db->exec('BEGIN IMMEDIATE');
        $q=$db->prepare('SELECT value,revision FROM progress WHERE user_id=? AND storage_key=?');$q->execute([$session['user_id'],$key]);$current=$q->fetch(PDO::FETCH_ASSOC);
        $actual=$current ? (int)$current['revision'] : 0;
        if ($revision!==$actual) {
            $db->exec('ROLLBACK');reply(409,['error'=>'另一页面更新了进度，请刷新后继续','record'=>['value'=>$current['value'] ?? null,'revision'=>$actual]]);
        }
        $q=$db->prepare('INSERT OR REPLACE INTO progress(user_id,storage_key,value,revision,updated_at) VALUES(?,?,?,?,?)');
        $q->execute([$session['user_id'],$key,$value,$actual+1,$now]);$db->exec('COMMIT');
        reply(200,['revision'=>$actual+1]);
    }
    reply(404,['error'=>'接口不存在']);
} catch (Throwable $e) {
    error_log('CPPFUN API: '.$e->getMessage());reply(500,['error'=>'保存服务暂时不可用，请稍后重试']);
}
