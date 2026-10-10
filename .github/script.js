const header=document.querySelector(".site-header");
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");

menu?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menu.setAttribute("aria-expanded",open?"true":"false");
});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const onScroll=()=>header.classList.toggle("scrolled",window.scrollY>30);
window.addEventListener("scroll",onScroll,{passive:true});
onScroll();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();
