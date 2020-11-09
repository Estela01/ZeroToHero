//Utilitários
Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.first = function () {
  return this[0];
};

Number.prototype.floatFixed = function () {
  if (this % 1 === 0) {
    return this;
  } else {
    return this.toFixed(2);
  }
};

const putDot = (expression) => {
  const arrayNumbers = expression.split(/[^0-9\.]+/);
  const hasDot = arrayNumbers.last().includes(".");
  return hasDot ? "" : ".";
};
