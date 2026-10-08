(()=>{'use strict';const workerURL=new URL('compiler/runner-worker.js',document.currentScript.src);workerURL.search='?v=compiler-fix-1';
window.CPP_RUNNER={run(source,inputs=[''],onPhase=()=>{},harness=null,signal=null){return new Promise((resolve,reject)=>{
 if(signal?.aborted){reject(new Error('已取消，可以修改答案后重新运行。'));return;}
 const worker=new Worker(workerURL,{type:'module'});let timer,finished=false,stage='loading';
 const stop=()=>{finished=true;clearTimeout(timer);signal?.removeEventListener('abort',cancel);worker.terminate();};
 const fail=message=>{if(finished)return;stop();reject(new Error(message));};
 const cancel=()=>fail('已取消，可以修改答案后重新运行。');
 const deadline=(ms,message)=>{clearTimeout(timer);timer=setTimeout(()=>fail(message),ms);};
 signal?.addEventListener('abort',cancel,{once:true});
 deadline(300000,'编程工具加载超时，请检查网络后重新运行。');
 worker.onmessage=({data})=>{if(finished)return;if(data.phase){
  if(data.phase!==stage){stage=data.phase;if(stage==='compile')deadline(60000,'编译超时，请检查代码后重新运行。');if(stage==='run')deadline(3000,'运行超时，请检查循环或递归是否能结束。');}
  try{onPhase(data.phase,data);}catch(e){fail('编程状态显示失败，请重新运行。');}return;
 }stop();resolve(data);};
 worker.onerror=()=>fail('编程环境加载失败，请检查网络后重新运行。');
 worker.postMessage({source,inputs,harness});
 });}};
})();
