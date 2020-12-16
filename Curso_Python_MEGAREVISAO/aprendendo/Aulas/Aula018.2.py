'''galera = [['JOÃO', 19], ['ANA', 13]]
for p in galera:
    print(f'{p[0]} tem {p[1]} anos de idade')'''

galera =list()
dado = list()
totmai = totmen =  0
for c in range(0,3):
    dado.append(str(input('nome: ')))
    dado.append(int(input('Idade: ')))
    galera.append(dado[:])
    dado.clear()
print(galera)

for p in galera:
    if p[1] >= 21:
        print(f'{p[0]} é maior ')
        totmai += 1
    else:
        print(f'{p[0]} é menor')
        totmen +=1
print(f'Temos {totmai} maiores e {totmen} menores')