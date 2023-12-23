// Obtém o elemento do contador
var counterElement = document.getElementById("counter");

// Obtém o valor atual do contador do armazenamento local
var counterValue = localStorage.getItem("pageCounter");

// Verifica se o valor do contador já existe
if (counterValue) {
  // Converte o valor para número
  counterValue = parseInt(counterValue);
} else {
  // Caso contrário, define o valor inicial como 0
  counterValue = 0;
}

// Incrementa o valor do contador
counterValue++;

// Atualiza o texto do contador
counterElement.textContent = counterValue;

// Armazena o novo valor do contador no armazenamento local
localStorage.setItem("pageCounter", counterValue.toString());
