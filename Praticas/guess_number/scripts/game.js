//elementos do html
const record_storage = "RECORD_SAVED";
const max_number = 100;
const max_guess = 10;
const guesses = document.querySelector(".guesses");
const guessField = document.querySelector(".guess-field");
const result = document.querySelector(".result");
const newGame = document.querySelector(".new-game");
const guessRecord = document.querySelector(".guess-record");
const record = localStorage.getItem(record_storage);

//variaveis do jogo
let randomNumber = Math.floor(Math.random() * max_number) + 1;
let guessCount = 0;
let gameEnded = false;

//verificar se é maior
const isBigger = (number1, number2) => {
  return number1 > number2;
};

//remover todos os backgrounds
const removeColorBgs = (classes) => {
  classes.remove("bg-yellow");
  classes.remove("bg-success");
  classes.remove("bg-error");
};

//reiniciar o jogo
const resetGame = () => {
  randomNumber = Math.floor(Math.random() * max_number) + 1;
  guessCount = 0;
  gameEnded = false;
  guesses.textContent = "";
  result.textContent = "";
  guessField.value = "";
  removeColorBgs(result.classList);
  guessField.focus();
  guessField.select();
};

const showRecord = (valor) => {
  guessRecord.textContent = `Seu record é ${valor}`;
};

const newRecord = (newRecord) => {
  if (!record) {
    localStorage.setItem(record_storage, newRecord);
    showRecord(newRecord);
  } else if (isBigger(record, newRecord)) {
    localStorage.setItem(record_storage, newRecord);
    showRecord(newRecord);
  }
};

const winGame = (guess) => {
  result.textContent = `Parabéns! Você acertou! Foram só ${guess} tentativas!`;
  result.classList.add("bg-success");
  newRecord(guess);
  gameEnded = true;
};

if (record) {
  showRecord(record);
}

//palpitar com enter
guessField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    palpitar();
  }
});

//função principal para palpitar
const palpitar = () => {
  if (gameEnded) {
    return;
  }
  //Aumenta em 1 o palpite
  guessCount++;

  //remove todos os backgrounds
  removeColorBgs(result.classList);

  //salva o palpite do jogador
  const userGuess = Number(guessField.value);

  //verifica se é maior que o número
  const bigger = isBigger(userGuess, randomNumber);

  if (guessCount < max_guess) {
    //se o número for igual, ele ganha
    if (userGuess === randomNumber) {
      winGame(guessCount);

      //se o número for maior, diz isso na tela
    } else if (bigger) {
      result.classList.add("bg-yellow");
      result.textContent = "Seu palpite foi alto!";

      //se o número for menor, diz isso na tela
    } else {
      result.classList.add("bg-yellow");
      result.textContent = "Seu palpite foi baixo!";
    }

    //ao final coloca mais um palpite na lista de palpites
    guesses.textContent += ` ${userGuess}`;

    //coloca o cursor de volta ao campo de texto
    guessField.focus();
    guessField.select();
  } else if (guessCount === max_guess && userGuess === randomNumber) {
    winGame(guessCount);
  } else {
    result.classList.add("bg-error");
    result.textContent = `Você perdeu, o número era: ${randomNumber}`;
    gameEnded = true;
  }
};
