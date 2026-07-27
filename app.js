
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
ultimo.value=localStorage.getItem('ultimoCodigo')||100;
function gerar(){
 let ult=Number(ultimo.value);
 let html='';
 for(let i=0;i<Number(quantidade.value);i++){
   ult++;
   const sku='85-'+String(ult).padStart(6,'0');
   html+=`<div class="et">
   <div class="logo">85 DESAPEGO</div>
   <div class="info"><span>${categoria.value}</span><span>Tam ${tam.value}</span></div>
   <div class="preco">R$ ${preco.value}</div>
   <svg id="bc${i}"></svg>
   <div class="sku">${sku}</div>
   </div>`;
 }
 ultimo.value=ult;
 localStorage.setItem('ultimoCodigo',ult);
 etiquetas.innerHTML=html;
 let start=ult-Number(quantidade.value)+1;
 for(let i=0;i<Number(quantidade.value);i++){
   let sku='85-'+String(start+i).padStart(6,'0');
   JsBarcode('#bc'+i,sku,{format:'CODE128',displayValue:false,height:40,width:1.5,margin:2});
 }
}
