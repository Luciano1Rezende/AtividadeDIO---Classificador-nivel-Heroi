// Desafio: Classificador de Nível de Herói
// Objetivo: Criar um programa que classifique o nível de um herói com base na quantidade de XP (Experiência) que ele possui.
// Regras de Classificação:

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do herói: ", function(nomeHeroi) {
    rl.question("Digite a quantidade de XP do herói: ", function(xpInput) {
        let XP = parseInt(xpInput);
        let nivelHeroi = "";
        if (XP < 1000)
            nivelHeroi = "Ferro";
        else if (XP >= 1000 && XP <= 2000)
            nivelHeroi = "Bronze";
        else if (XP >= 2001 && XP <= 5000)
            nivelHeroi = "Prata";
        else if (XP >= 5001 && XP <= 7000)
            nivelHeroi = "Ouro";
        else if (XP >= 7001 && XP <= 8000)
            nivelHeroi = "Platina";
        else if (XP >= 8001 && XP <= 9000)
            nivelHeroi = "Ascendente";
        else if (XP >= 9001 && XP <= 10000)
            nivelHeroi = "Imortal";
        else if (XP >= 10001)
            nivelHeroi = "Radiante";

        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
        rl.close();
    });
});