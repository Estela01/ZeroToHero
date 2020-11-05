const botaoTopo = document.querySelector("#topButton");
const header = document.querySelector("header");

window.onscroll = () => {
  const scrollValue = window.scrollY;

  if (scrollValue > header.clientHeight) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

botaoTopo.addEventListener("click", scrollToTop);
