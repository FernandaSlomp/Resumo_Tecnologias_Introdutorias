lista = []
for count in range(0,5):
    lista.append(int(input('DIga um valor ')))
print(f'VocÊ digitou os valores {lista}')
sorted(lista)
maior = lista[-1]
menor = lista[0]
print(f'O maior valor foi: {maior}', end= ' ')
for c, v in enumerate(lista):
    if v == maior:
        print(f'na posição {c+1}', end= ' ')
print(f'\nO menor valor foi {menor}', end= ' ')
for c, v in enumerate(lista):
    if v == menor:
        print(f'na posição {c+1}', end=' ')
