total = 0
while True:
    nome = str(input('Qual o nome do produto? '))
    preço = float(input('Qual o preço? '))
    total += preço
    continuar = ' '
    while continuar not in 'SN':
        continuar = str(input('Quer continuar? [S/N] ')) .upper().strip()[0]
    if continuar == 'N':
        break
print(f'O preço total foi de {total}')