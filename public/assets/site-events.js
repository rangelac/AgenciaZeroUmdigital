/* Métricas de interação: nunca envia nome, mensagem ou conteúdo do formulário.
   Clique no WhatsApp indica intenção de contato, não mensagem recebida nem venda. */
(function(){
 function track(service){
  const detail={event:'whatsapp_click',service:service,page_path:location.pathname};
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push(detail);
  if(typeof window.gtag==='function'){
   window.gtag('event','whatsapp_click',{
    send_to:'G-L51YE133NR',
    service:service,
    page_path:location.pathname
   });
  }
  document.dispatchEvent(new CustomEvent('zeroum:whatsapp-click',{detail:detail}));
 }
 document.addEventListener('click',function(event){
  const target=event.target instanceof Element?event.target.closest('a[href]'):null;
  if(!target)return;
  let url;try{url=new URL(target.href,location.href);}catch{return;}
  if(url.hostname!=='wa.me')return;
  const label=target.dataset.trackService||target.getAttribute('aria-label')||target.textContent.trim().slice(0,100)||'WhatsApp';
  track(label);
 });
 document.addEventListener('submit',function(event){
  const form=event.target;
  if(!(form instanceof HTMLFormElement)||form.id!=='brief')return;
  const service=form.querySelector('[name="service"]');
  track(service&&service.value?String(service.value).slice(0,100):'Formulário de contato');
 },true);
})();
