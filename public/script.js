// Анимация появления при скролле
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .hero, h2");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }else{
        entry.target.classList.remove("fade-in");
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
});
function date(){
  const d = new Date();
  document.getElementById("date").innerText=`${d.getFullYear()}`;
}

function onclick(){
  document.querySelector(".btn-header").addEventListener("click",()=>{
    window.location.href="https://wa.me/+79528885656?text=hi! I need landing page!"
  })
}
function openMenu(){
  const listA=['<a href="/">Main</a>','<a href="/about">О нас</a>','<a href="#services">Услуги</a>','<a href="#pricing">Цены</a>','<a href="#contacts">Контакты</a>'];
  function createMenu(){
    const list=document.createElement("div");
    list.classList.add('menu');
    list.innerHTML=`${listA}`;
    document.querySelector("body").prepend(list);
    setTimeout(()=>{
      document.querySelector(".menu").style.height="100vh";
      document.querySelector(".menu").style.opacity="1";
      for(let c=0;c<=listA.length;c++){
        document.querySelectorAll(".menu > a")[c].style.fontSize="30px";
        document.querySelectorAll(".menu > a")[c].style.opacity="1";
      };
    },1)
    document.querySelector(".menu").addEventListener("click",()=>{
      for(let c=0;c<=listA.length;c++){
        document.querySelector(".menu").style.opacity="0";
        document.querySelectorAll(".menu > a")[c].style.opacity="0";
        document.querySelectorAll(".menu > a")[c].style.fontSize="0px";
        document.querySelector(".menu").style.top="100%";
      };
      setTimeout(()=>{
        document.querySelector(".menu").remove();
      },777);
    });
  }
  document.querySelector(".nav").addEventListener("click", createMenu);
}
async function main(){
  await openMenu();
  await date();
  await onclick();
}
main();