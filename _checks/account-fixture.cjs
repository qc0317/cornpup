// Browser-only course regressions use a deterministic authenticated API fixture.
// Live PHP/SQLite security and cross-account tests are run separately.
module.exports=async function accountFixture(ctx){
 const records={};
 await ctx.route('https://score.hiyamax.com/cppfun-api/**',async route=>{
  const req=route.request(),path=new URL(req.url()).pathname.replace('/cppfun-api','');
  const headers={'access-control-allow-origin':'http://127.0.0.1:8080','access-control-allow-credentials':'true','access-control-allow-headers':'Content-Type, X-CSRF-Token','access-control-allow-methods':'GET,POST,PUT,OPTIONS'};
  if(req.method()==='OPTIONS')return route.fulfill({status:204,headers});
  if(path==='/session')return route.fulfill({json:{user:{name:'Fixture'},csrf:'test',records},headers});
  if(path.startsWith('/progress/')&&req.method()==='PUT'){const key=decodeURIComponent(path.slice(10)),body=req.postDataJSON(),revision=(records[key]?.revision||0)+1;records[key]={value:body.value,revision};return route.fulfill({json:{revision},headers});}
  return route.fulfill({status:404,json:{error:'Unknown fixture route'},headers});
 });
};
