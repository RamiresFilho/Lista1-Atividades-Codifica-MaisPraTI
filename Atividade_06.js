/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

let ehTriangulo = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);

if (ehTriangulo) {
    
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Os lados formam um triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Os lados formam um triângulo isósceles.");
    } else {
        console.log("Os lados formam um triângulo escaleno.");
    }
} else {
    console.log("Os lados não formam um triângulo, tente novamente.");
}
