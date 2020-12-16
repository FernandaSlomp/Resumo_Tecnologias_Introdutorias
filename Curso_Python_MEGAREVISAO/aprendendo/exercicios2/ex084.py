nomes = list()
pesos = list()
totpessoas = 0
maiorpeso = list()
menorpeso = list()
while True:
    nome = str(input('Nome: '))
    nomes.append(nome)
    totpessoas += 1
    peso = int(input('Peso: '))
    pesos.append(peso)
    princ
    continuar = str(input('Quer continuar? ')).upper().strip()[0]
    if continuar == 'N':
        break

print(maiorpeso)
print(nomes, pesos)
print(f'Ao todo você cadastrou {totpessoas} pessoas')