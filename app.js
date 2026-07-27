if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
ultimo.value=localStorage.getItem('ultimoCodigo')||100;
function gerar(){
const n=Number(ultimo.value)+1;
ultimo.value=n;
localStorage.setItem('ultimoCodigo',n);
const sku='85-'+String(n).padStart(6,'0');
cat.textContent=categoria.value;
tamanho.textContent=tam.value;
valor.textContent=preco.value;
document.getElementById('sku').textContent=sku;
JsBarcode('#barcode',sku,{format:'CODE128',displayValue:false,height:40,width:1.6,margin:2});
preview.classList.remove('hide');
}