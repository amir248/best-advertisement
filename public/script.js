// Анимация появления при скролле
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .hero, h2");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
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
  function createMenu(){
    console.log('oK');
    const list=document.createElement("div");
    list.classList.add('menu');
    document.querySelector("main").prepend(list);
  }
  document.getElementsByClassName("nav").addEventListener("click", createMenu);
}
async function main(){
  await openMenu();
  await date();
  await onclick();
}
main();