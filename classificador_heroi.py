nomeHeroi = "Meste dos Desesperados"
XP = 8500
nivelHeroi = ""

if XP < 1000:
  nivelHeroi = "Ferro"

elif XP >= 1001 and XP <= 2000:
  nivelHeroi = "Bronze"

elif XP >= 2001 and XP <= 5000:
  nivelHeroi = "Prata"

elif XP >= 5001 and XP <= 7000:
  nivelHeroi = "Ouro"

elif XP >= 7001 and XP <= 8000:
  nivelHeroi = "Platina"

elif XP >= 8001 and XP <= 9000:
  nivelHeroi = "Ascendente"

elif XP >= 9001 and XP <= 10000:
  nivelHeroi = "Imortal"

elif XP > 10001:
  nivelHeroi = "Radiante"

print(f"O Heroi de nome {nomeHeroi} está no nível {nivelHeroi}")