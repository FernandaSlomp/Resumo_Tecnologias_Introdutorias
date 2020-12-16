tot = 0
grandona = []
pequena = {}
soma = media = 0
while True:
    pequena.clear()   #revisar isso
    pequena['nome'] = str(input('nome: '))
    pequena['sexo'] = str(input('Sexo[F/M]: ')).upper().strip()[0]
    pequena['idade'] = int(input('idade: '))
    soma +=pequena['idade']
    continuar = str(input('Quer continuar? [S/N]')).upper().strip()[0]
    grandona.append(pequena.copy())   #revisar isso
    tot += 1
    if continuar == 'N':
        break
print(grandona)
print(f'O número de pessoas cadastradas é:  {tot}')
media = soma /tot
print(f'A média de idade é: {media:5.2f}')
print(f'As mulheres cadastradas foram: ', end='')
for p in grandona:
    if p['sexo'] in 'Ff':
        print(f'{p["nome"]}', end=' ')
print()
print('A lista de pessoas acima da média é: ')
for p in grandona:
    if p['idade'] >= media:
        print('  ', end='')
        for k,v in p.items():
            print(f'{k} = {v}; ', end='')
        print()
