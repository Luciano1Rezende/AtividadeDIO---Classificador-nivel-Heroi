let nomeHeroi = "Mestre dos Desastrados";
let XP = 1500; 
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