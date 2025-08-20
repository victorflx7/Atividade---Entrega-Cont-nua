document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
  
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultadoEl = document.getElementById("resultado");
  
    let resultado;
  
    switch (operacao) {
      case "soma":
        resultado = num1 + num2;
        break;
      case "subtracao":
        resultado = num1 - num2;
        break;
      case "multiplicacao":
        resultado = num1 * num2;
        break;
      case "divisao":
        if (num2 === 0) {
          resultadoEl.textContent = "❌ Erro: divisão por zero!";
          resultadoEl.style.color = "red";
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        resultado = "Operação inválida.";
    }
  
    resultadoEl.textContent = `✅ Resultado: ${resultado}`;
    resultadoEl.style.color = "green";
  });
  
  const botao = document.getElementById("foge");

botao.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  botao.style.position = "absolute";
  botao.style.left = `${x}px`;
  botao.style.top = `${y}px`;
});

const frases = [
  "Você clicou! Isso era mesmo necessário?",
  "Apertei esse botão e nada aconteceu... ou será que aconteceu?",
  "Ei! Eu sou só um botão!",
  "Clique com moderação!",
];

document.getElementById("botao").addEventListener("click", () => {
  alert(frases[Math.floor(Math.random() * frases.length)]);
});
