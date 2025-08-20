const calcular = require("calc.js");

test("soma de 2 + 3 deve ser 5", () => {
  expect(calcular(2, 3, "soma")).toBe(5);
});

test("subtração de 10 - 4 deve ser 6", () => {
  expect(calcular(10, 4, "subtracao")).toBe(6);
});

test("multiplicação de 3 * 7 deve ser 21", () => {
  expect(calcular(3, 7, "multiplicacao")).toBe(21);
});

test("divisão de 20 / 4 deve ser 5", () => {
  expect(calcular(20, 4, "divisao")).toBe(5);
});

test("divisão por zero deve lançar erro", () => {
  expect(() => calcular(10, 0, "divisao")).toThrow("Divisão por zero");
});