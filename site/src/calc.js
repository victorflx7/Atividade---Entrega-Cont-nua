function calcular(num1, num2, operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2;
    case "subtracao":
      return num1 - num2;
    case "multiplicacao":
      return num1 * num2;
    case "divisao":
      if (num2 === 0) {
        throw new Error("Divisão por zero");
      }
      return num1 / num2;
    default:
      throw new Error("Operação inválida");
  }
}

module.exports = calcular;
