/* Avviso "gira il telefono in orizzontale" (solo telefoni in verticale).
   Incluso da tutte le simulazioni tranne index.html. */
(function(){
  if(document.getElementById('rot'))return;
  var T={it:['Gira il telefono in orizzontale: la simulazione si vede molto meglio.','Continua così'],
         en:['Turn your phone sideways: the simulation is seen much better in landscape.','Continue anyway']};
  var css='#rot{position:fixed;inset:0;z-index:2147483000;display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:30px;text-align:center;background:rgba(10,10,8,.88);color:#f1efe6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-family:system-ui,sans-serif}'+
    '#rot .ph{width:46px;height:78px;border:3px solid #d6f06a;border-radius:10px;animation:rotturn 2.4s ease-in-out infinite}'+
    '@keyframes rotturn{0%,20%{transform:rotate(0)}50%,80%{transform:rotate(-90deg)}100%{transform:rotate(0)}}'+
    '#rot p{margin:0;font-size:17px;line-height:1.45;max-width:300px}'+
    '#rot button{border:1px solid rgba(255,255,255,.25);background:transparent;color:#a5a291;border-radius:999px;padding:9px 16px;font:14px system-ui,sans-serif;cursor:pointer}'+
    '@media (orientation:portrait) and (pointer:coarse) and (max-width:820px){html:not(.rot-ok) #rot{display:flex}}'+
    '@media (prefers-reduced-motion:reduce){#rot .ph{animation:none}}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  function mount(){
    var d=document.createElement('div');d.id='rot';
    d.innerHTML='<div class="ph"></div><p></p><button type="button"></button>';
    document.body.appendChild(d);
    var p=d.querySelector('p'),b=d.querySelector('button');
    function lang(){var t=T[(document.documentElement.lang||'it').slice(0,2)==='en'?'en':'it'];p.textContent=t[0];b.textContent=t[1];}
    lang();
    new MutationObserver(lang).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    b.onclick=function(){document.documentElement.classList.add('rot-ok');};
  }
  if(document.body)mount();else document.addEventListener('DOMContentLoaded',mount);
})();
