/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
let contador = 1;

while (contador <= numero) {
    fatorial *= contador;
    contador++;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);