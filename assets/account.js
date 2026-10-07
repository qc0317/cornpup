(()=>{
 'use strict';
 const base=new URL('.',document.currentScript.src),home=new URL('../index.html',base),loginURL=new URL('../login.html',base);
 const API=window.CPPFUN_API||'https://score.hiyamax.com/cppfun-api';
 const records=new Map(),dirty=new Map();let user=null,csrf='',loading=true,failed=false,timer=null,inflight=null,conflict=false;
 let status,controls;
 async function request(path,options={}){
   const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),12000);
   try{const r=await fetch(API+path,{credentials:'include',...options,signal:controller.signal,headers:{'Content-Type':'application/json',...(csrf?{'X-CSRF-Token':csrf}:{}),...options.headers}});
   const data=await r.json();if(!r.ok){const e=new Error(data.error||'服务暂时不可用');e.status=r.status;throw e;}return data;
   }catch(e){if(e.name==='AbortError')throw new Error('连接超时，请重试');if(e instanceof TypeError)throw new Error('无法连接保存服务，请检查网络后重试');throw e;}finally{clearTimeout(timeout);}
 }
 function paint(){
   if(!status)return;
   status.textContent=loading?'正在读取账号…':failed?'账号服务连接失败：本页进度未同步':!user?'访客学习 · 登录后保存进度':conflict?'进度发生冲突，请刷新后继续':dirty.size?'进度尚未同步 · 请保持页面打开':'进度已同步到 '+user.name+' 的账号';
   status.dataset.state=failed||conflict?'error':dirty.size?'pending':'ready';
   controls.replaceChildren();
   if(user){const name=document.createElement('strong');name.textContent=user.name;const manage=document.createElement('a');manage.href=loginURL.href;manage.textContent='账号设置';const logout=document.createElement('button');logout.type='button';logout.textContent='退出';logout.onclick=async()=>{logout.disabled=true;try{await flush();await request('/logout',{method:'POST',body:'{}'});records.clear();dirty.clear();user=null;csrf='';location.assign(home.href);}catch(e){status.textContent=e.message;logout.disabled=false;}};controls.append(name,manage,logout);}
   else{const link=document.createElement('a');link.href=loginURL.href+'?next='+encodeURIComponent(location.pathname);link.textContent='登录';controls.append(link);}
   if((failed||dirty.size)&&!conflict){const retry=document.createElement('button');retry.type='button';retry.textContent='重试同步';retry.onclick=()=>{if(user)flush().catch(()=>{});else location.reload();};controls.append(retry);}
 }
 function mount(){
   const bar=document.createElement('div');bar.className='account-bar';bar.setAttribute('aria-label','账号与云端进度');status=document.createElement('span');status.id='accountStatus';status.setAttribute('role','status');controls=document.createElement('div');controls.className='account-actions';bar.append(status,controls);const header=document.querySelector('header');if(header)header.after(bar);else document.body.prepend(bar);
   document.querySelectorAll('.chips span').forEach(el=>{if(/进度保存在本机/.test(el.textContent))el.textContent='登录后云端保存进度';});
   paint();
 }
 async function flush(){
   clearTimeout(timer);
   if(inflight){await inflight;if(dirty.size)return flush();return;}
   if(!user||!dirty.size)return;
   if(conflict)throw new Error('另一页面更新了进度，请刷新后继续');
   inflight=(async()=>{
     failed=false;paint();
     while(dirty.size){const [key,value]=dirty.entries().next().value,current=records.get(key)||{revision:0,value:null};
       const r=await request('/progress/'+encodeURIComponent(key),{method:'PUT',body:JSON.stringify({value,revision:current.revision})});
       records.set(key,{value,revision:r.revision});if(dirty.get(key)===value)dirty.delete(key);paint();
     }
   })();
   try{await inflight;}catch(e){failed=true;conflict=e.status===409;paint();if(e.status===401)status.textContent='登录已过期，当前进度未保存。请重新登录。';throw e;}finally{inflight=null;}
 }
 window.CPP_PROGRESS={
   getItem(key){return dirty.has(key)?dirty.get(key):records.get(key)?.value??null;},
   setItem(key,value){value=String(value);if(!user){records.set(key,{value,revision:0});return;}if(this.getItem(key)===value)return;dirty.set(key,value);paint();clearTimeout(timer);timer=setTimeout(()=>flush().catch(()=>{}),350);},
   removeItem(key){if(!user){records.delete(key);return;}dirty.set(key,null);paint();clearTimeout(timer);timer=setTimeout(()=>flush().catch(()=>{}),350);}
 };
 window.CPP_AUTH={
   get user(){return user;},request,flush,
   async reloadAfterSave(){try{await flush();location.reload();}catch(e){alert('重置尚未同步：'+e.message);}},
   ready:null
 };
 const domReady=document.readyState==='loading'?new Promise(r=>document.addEventListener('DOMContentLoaded',r,{once:true})):Promise.resolve();domReady.then(mount);
 window.CPP_AUTH.ready=(async()=>{try{const s=await request('/session');user=s.user;csrf=s.csrf||'';for(const [k,v] of Object.entries(s.records||{}))records.set(k,v);}catch(e){failed=true;}loading=false;await domReady;paint();return user;})();
 window.addEventListener('beforeunload',e=>{if(user&&dirty.size){e.preventDefault();e.returnValue='';}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&user&&dirty.size)flush().catch(()=>{});});
})();
