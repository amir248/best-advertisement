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
async function main(){
  await date();
  await onclick();
}
main();