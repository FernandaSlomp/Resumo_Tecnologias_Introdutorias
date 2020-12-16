lista = []
while True:
    numeros = int(input('Diga um valor: '))
    continuar = str(input('Quer continuar: ')).upper().strip()[0]
    lista.append(numeros)
    if continuar == 'N':
        break
print(f'Você digitou {len(lista)} elementos')
lista.sort(reverse = True)
print(f'A lista em ordem decrescente fica: {lista}')
if 5 in lista:
    print('O valor faz parte da lista')
else:
    print('O valor 5 não foi encontrado.')