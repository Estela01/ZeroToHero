const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");

buttons.forEach((elemento) => {
  elemento.onclick = (evento) => {
    const input = evento.target.value; //Salvar value do botão em input
    const number = Number(input);

    if (isNaN(number)) {
      //Quando for NaN
      if (input == "c") {
        output.value = 0;
      } else if (input == "=") {
        try {
          output.value = eval(output.value);
        } catch (error) {
          output.value = NaN;
        }
      } else if (input == ".") {
        output.value += putDot(output.value);
      } else {
        output.value += input;
      }
    } else {
      if (output.value == 0) {
        output.value = number;
      } else {
        output.value += number;
      }
    }
  };
});
