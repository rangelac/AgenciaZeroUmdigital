/* Carrega os prints quando seus cartões se aproximam da tela.
   As imagens pendentes continuam ocultas caso o arquivo ainda não exista. */
const siteButtons=Array.from(document.querySelectorAll('[data-site-index]'));
function loadSitePrint(button){
 const img=button.querySelector('img');
 if(!img)return;
 const reveal=()=>{button.hidden=!(img.naturalWidth>0);};
 img.addEventListener('load',reveal,{once:true});
 img.addEventListener('error',()=>{button.hidden=true;},{once:true});
 if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src;}
 if(img.complete)reveal();
}
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   const button=entry.target.querySelector('[data-site-index]');
   if(button)loadSitePrint(button);
   observer.unobserve(entry.target);
  });
 },{rootMargin:'300px 0px'});
 siteButtons.forEach(button=>observer.observe(button.closest('.website-card')));
}else{siteButtons.forEach(loadSitePrint);}
(()=>{
 const modal=document.getElementById('sites-lightbox');
 const allTriggers=Array.from(document.querySelectorAll('[data-site-index]'));
 let triggers=[];
 const photo=modal.querySelector('.lightbox-image');
 const caption=modal.querySelector('.lightbox-caption');
 const counter=modal.querySelector('.lightbox-counter');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,opener=null,closing=false,closeTimer;
 function show(index){
  current=(index+triggers.length)%triggers.length;
  const source=triggers[current].querySelector('img');
  photo.src=source.getAttribute('src');photo.alt=source.alt;
  caption.textContent=source.alt;counter.textContent=(current+1)+' / '+triggers.length;
  if(!reduced.matches&&typeof photo.animate==='function'){
   photo.getAnimations().forEach(animation=>animation.cancel());
   photo.animate([{opacity:.25,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});
  }
 }
 function finishClose(){
  modal.close();modal.classList.remove('is-closing');closing=false;
 }
 function close(){
  if(!modal.open||closing)return;
  closing=true;modal.classList.add('is-closing');
  if(reduced.matches)finishClose();else closeTimer=window.setTimeout(finishClose,200);
 }
 allTriggers.forEach(button=>button.addEventListener('click',()=>{
  triggers=allTriggers.filter(item=>!item.hidden);
  const index=triggers.indexOf(button);
  if(index<0)return;
  if(modal.open)return;
  opener=button;show(index);document.body.classList.add('lightbox-open');modal.showModal();
  modal.querySelector('.lightbox-close').focus({preventScroll:true});
 }));
 modal.querySelector('.lightbox-close').addEventListener('click',close);
 modal.querySelector('.lightbox-prev').addEventListener('click',()=>{if(!closing)show(current-1);});
 modal.querySelector('.lightbox-next').addEventListener('click',()=>{if(!closing)show(current+1);});
 modal.addEventListener('cancel',event=>{event.preventDefault();close();});
 modal.addEventListener('click',event=>{
  if(event.target!==modal)return;
  const bounds=modal.getBoundingClientRect();
  if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)close();
 });
 modal.addEventListener('keydown',event=>{
  if(closing)return;
  if(event.key==='ArrowLeft'){event.preventDefault();show(current-1);}
  if(event.key==='ArrowRight'){event.preventDefault();show(current+1);}
 });
 modal.addEventListener('close',()=>{
  window.clearTimeout(closeTimer);document.body.classList.remove('lightbox-open');
  modal.classList.remove('is-closing');closing=false;
  if(opener)opener.focus({preventScroll:true});
 });
})();