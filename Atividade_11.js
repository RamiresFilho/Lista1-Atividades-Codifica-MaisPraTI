/* Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require('prompt-sync')();

let somaTotal = 0;
let quantidadeNumeros = 5;

for (let i = 1; i <= quantidadeNumeros; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}: `));
    somaTotal += numero;
}

console.log(`A soma dos numeros digitados é: ${somaTotal}`);