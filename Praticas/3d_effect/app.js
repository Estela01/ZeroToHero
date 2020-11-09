//Movimento de animação para acontecer
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Definir constante
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".levels");

const btns = document.querySelectorAll(".check");

// Evento de movimentar animação
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animar dentro
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Entrar
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animar fora
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Voltar
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
