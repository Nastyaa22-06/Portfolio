document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.querySelector('.progress'),sections=[...document.querySelectorAll('.story h2[id]')],toc=[...document.querySelectorAll('.toc a')];
function update(){const max=document.documentElement.scrollHeight-innerHeight,ratio=max?scrollY/max:0;progress.style.width=(ratio*100)+'%';let current='';sections.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.42)current=s.id});toc.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))}
addEventListener('scroll',update,{passive:true});update();
const focus=document.querySelector('.focus-button');if(focus)focus.addEventListener('click',()=>document.body.classList.toggle('focus'));
document.querySelectorAll('.cover,.media-wide,.media-strip').forEach(el=>el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`translate(${x*5}px,${y*4}px)`}));
document.querySelectorAll('.cover,.media-wide,.media-strip').forEach(el=>el.addEventListener('pointerleave',()=>el.style.transform=''));
