<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') exit(1);
$path=$argv[1] ?? ''; $credentials=$argv[2] ?? '';
if (!$path || !$credentials || file_exists($path)) {fwrite(STDERR,"Provide new database and private credentials paths\n");exit(1);}
$db=new PDO('sqlite:'.$path);$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$db->exec('CREATE TABLE users(id INTEGER PRIMARY KEY,name TEXT UNIQUE NOT NULL,password_hash TEXT NOT NULL);
CREATE TABLE sessions(token_hash TEXT PRIMARY KEY,user_id INTEGER NOT NULL,csrf TEXT NOT NULL,expires INTEGER NOT NULL);
CREATE TABLE progress(user_id INTEGER NOT NULL,storage_key TEXT NOT NULL,value TEXT,revision INTEGER NOT NULL,updated_at INTEGER NOT NULL,PRIMARY KEY(user_id,storage_key));
CREATE TABLE attempts(ip TEXT NOT NULL,at INTEGER NOT NULL); CREATE INDEX attempts_ip ON attempts(ip);');
$lines="CPPFUN 初始账号（请登录后修改密码）\n";
foreach (['Max','Scott'] as $name) {
    $password=bin2hex(random_bytes(12));
    $db->prepare('INSERT INTO users(name,password_hash) VALUES(?,?)')->execute([$name,password_hash($password,PASSWORD_BCRYPT,['cost'=>12])]);
    $lines.=$name.': '.$password."\n";
}
file_put_contents($credentials,$lines);chmod($credentials,0600);chmod($path,0600);
echo "Created two assigned accounts. Credentials written to private file.\n";
