// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
// valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer 
// entrada de sua preferência ou pode ser previamente definido no código;

let valor1 = 0;
let valor2 = 1;
let soma = 0;

var mensagem = '';

let numero = 21; // Número informado

while (soma < numero) {
    soma = valor1 + valor2;
    valor1 = valor2;
    valor2 = soma;
}

if (soma === numero || numero === 0) {
    mensagem = 'O número informado pertence à sequência! :)';
} else {
    mensagem = 'O número informado NÃO pertence à sequência! :(';
}

console.log(mensagem);