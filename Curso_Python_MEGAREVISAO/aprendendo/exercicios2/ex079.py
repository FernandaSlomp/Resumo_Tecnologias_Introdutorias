lista = []
while True:
    adicionar = int(input('Diga um valor: '))
    if adicionar not in lista:
        lista.append(adicionar)
    else:
        print('Valor duplicado! não será adicionado. ')
    continuar = str(input('Quer continuar? [S/N]')).upper().strip()[0]
    if continuar == 'N':
        break
sorted(lista)
print(f'Você digitou os valores {lista} da sua lista')