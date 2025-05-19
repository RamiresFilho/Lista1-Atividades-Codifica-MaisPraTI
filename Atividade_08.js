/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let menorValor, maiorValor;

if (valor1 < valor2) {
    menorValor = valor1;
    maiorValor = valor2;
    console.log(`Os valores em ordem crescente são: ${menorValor} e ${maiorValor}`);
} else if (valor1 === valor2) {
    console.log("Os valores são iguais, tente novamente.")
} else {
    menorValor = valor2;
    maiorValor = valor1;
    console.log(`Os valores em ordem crescente são: ${menorValor} e ${maiorValor}`);
}