/* Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

const prompt = require('prompt-sync')();

let n1 = 0;
let n2 = 1;
let proximo;

console.log("Os primeiros 10 números da sequência de Fibonacci são:");

for (let i = 0; i < 10; i++) {
    console.log(n1);         
    proximo = n1 + n2;        
    n1 = n2;                  
    n2 = proximo;             
}