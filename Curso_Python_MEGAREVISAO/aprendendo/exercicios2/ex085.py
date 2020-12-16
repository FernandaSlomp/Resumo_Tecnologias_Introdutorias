listona = [[], []]
valor = 0
for c in range(1,8):
    valor = int(input(f'Digite o {c}° valor: '))
    if valor % 2 == 0:
        listona[0].append(valor)
    else:
        listona[1].append(valor)
print(f'Os números pares são: {sorted(listona[0])}')
print(f'Os números inpares são: {sorted(listona[1])}')