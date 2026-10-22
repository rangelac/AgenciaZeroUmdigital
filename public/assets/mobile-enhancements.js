/* Mantém o movimento na tela e pausa trabalho fora da área visível. */
(function(){
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>entry.target.classList.toggle('is-offscreen',!entry.isIntersecting));
  },{rootMargin:'80px 0px'});
  document.querySelectorAll('.launch-scene,.founder-portrait').forEach(item=>observer.observe(item));
 }
 function syncVisibility(){document.body.classList.toggle('page-inactive',document.hidden);}
 document.addEventListener('visibilitychange',syncVisibility);syncVisibility();
 const menu=document.querySelector('.menu'),nav=document.querySelector('.links');
 if(!menu||!nav)return;
 function dismiss(){if(menu.getAttribute('aria-expanded')==='true')menu.click();}
 document.addEventListener('click',event=>{
  if(!menu.contains(event.target)&&!nav.contains(event.target))dismiss();
 });
 const desktop=window.matchMedia('(min-width:721px)');
 desktop.addEventListener('change',event=>{if(event.matches)dismiss();});
})();