lista = []
pares = []
impares = []
while True:
    valor = int(input('Diga um valor: '))
    continuar = str(input('Quer continuar? ')).upper().strip()[0]
    lista.append(valor)
    if continuar == 'N':
        break
print(lista)
for i, v in enumerate(lista):
    if v % 2 ==0:
        pares.append(v)
    elif v % 2 ==1:
        impares.append(v)
print(f'Alista de pares é: {pares}')
print(f'A lista de ímpares é: {impares}')