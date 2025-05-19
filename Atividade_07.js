/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')();

let precoPorMaca = 0.30;
let quantidadeMaca = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
let valorTotal;

if (quantidadeMaca >= 12) {
    precoPorMaca = 0.25;
}

valorTotal = quantidadeMaca * precoPorMaca;
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
