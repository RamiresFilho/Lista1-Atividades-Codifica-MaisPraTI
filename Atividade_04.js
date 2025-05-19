/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')();

let opcao = parseInt(prompt("Escolha uma opção:\n1 - Cardapio\n2 - Reservar mesa\n3 - Sair\n" ));

switch (opcao) {
    case 1:
        console.log("Você escolheu Cardapio");
        console.log("1 - Pizza\n2 - Salada");
        let prato = parseInt(prompt("Escolha um prato: "));
        if (prato === 1) {
            console.log("Você escolheu Pizza.");
        } else if (prato === 2) {
            console.log("Você escolheu Salada.");
        } else {
            console.log("Prato inválido.");
        }
        break;
    case 2:
        console.log("Você escolheu Reservar mesa");
        console.log("1 - Mesa para 2 pessoas\n2 - Mesa para 4 pessoas");
        let mesa = parseInt(prompt("Escolha uma mesa: "));
        if (mesa === 1) {
            console.log("Mesa para 2 pessoas reservada.");
        } else if (mesa === 2) {
            console.log("Mesa para 4 pessoas reservada.");
        } else {
            console.log("Mesa inválida.");
        }
        break;
    case 3:
        console.log("Saindo, até logo!");
        break;
    default:
        console.log("Opção inválida.");
}