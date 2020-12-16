valores = []
#valores.append(5)
#valores.append(9)
#valores.append(4)
for cont in range(0,5):
    valores.append(int(input('digite um valor!')))
for c, v in enumerate(valores): #pega tanto a chave quantos os valores
    print(f'Na posião {c} encontrei o {v}..', end='')
print('fim')
