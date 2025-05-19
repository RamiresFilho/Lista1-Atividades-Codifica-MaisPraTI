/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
 "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("De 0 a 10, digite a nota do aluno: "));

if (nota < 5) {
    console.log("Reprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}