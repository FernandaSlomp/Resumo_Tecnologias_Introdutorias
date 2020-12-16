totmulher20 = tot18 = tothomens = 0
while True:
    idade = int(input('Idade: '))
    sexo = '  '
    while sexo not in 'MF':
        sexo = str(input('Qual o sexo? [M/F] ')).upper().strip()[0]
    if idade >= 18:
        tot18 += 1
    if sexo == 'M':
        tothomens += 1
    if totmulher20 == 'F' and idade < 20:
        totmulher20 += 1
    continuar = '  '
    while continuar not in 'SN':
        continuar = str(input('Quer continuar? ')).upper().strip()[0]
    if continuar == 'N':
        break
print(f'Total de pessoas com mais de 18 é {tot18} ')
print(f'O número de mulheres maiores de 20 é {totmulher20}')
print(f'O número de homens é {tothomens}')
print('ACABOU! ')