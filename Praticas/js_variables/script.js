// Parte 1 - Var e Let

var a = "a";

for (var i = 0; i <= 5; i++) {
  var a = i;
}

console.log("var a:", a);
// 5
console.log("var i:", i);
// 6

let b = "b";

for (let j = 0; j <= 5; j++) {
  let b = i;
}

console.log("let b:", b);
// "b"
// console.log("let j:", j);
// Erro j undefined

// Parte 2 - Let e Const ======================================

const c = "c";
// c = "c2";

let d = "d";
d = "d2";

console.log("const c:", c);
// "c"
console.log("let d:", d);
// "d2"

// Parte 3 - Hoist ======================================

// Parte 4 - Seletores ======================================
const menu = document.querySelector(".menu");
console.log("menu", menu);

menu.addEventListener("click", (e) => {
  element = e.target;

  if (e.target.innerHTML === "menu") {
    e.target.innerHTML = "close";
  } else {
    e.target.innerHTML = "menu";
  }
});
