/* Eventos locais para futura integração com uma ferramenta de medição.
   Não envia dados a terceiros, não lê formulários e não instala cookies. */
document.addEventListener('click',function(event){
 const target=event.target instanceof Element?event.target.closest('a[href]'):null;
 if(!target)return;
 let url;try{url=new URL(target.href,location.href);}catch{return;}
 if(url.hostname!=='wa.me')return;
 const label=target.dataset.trackService||target.getAttribute('aria-label')||target.textContent.trim().slice(0,100)||'WhatsApp';
 const detail={event:'whatsapp_click',service:label,page_path:location.pathname};
 window.dataLayer=window.dataLayer||[];window.dataLayer.push(detail);
 document.dispatchEvent(new CustomEvent('zeroum:whatsapp-click',{detail}));
});