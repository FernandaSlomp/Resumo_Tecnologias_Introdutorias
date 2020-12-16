numeros = tuple(int(input(f'Digite o {i+1}º numero: ')) for i in range(4))
print(f'Você digitou os valores {numeros}')
print(f'O valor 9 aparece: {numeros.count(9)} vezes')
if 3 in numeros:
    print(f'O valor 3 aparece na posição: {numeros.index(3)+1}')
else:
    print('O valor 3 não foi digitado! ')
print(f'Os valores pares são: ', end= '')
for n in numeros:
    if n % 2 == 0:
        print(n, end= ' ')
