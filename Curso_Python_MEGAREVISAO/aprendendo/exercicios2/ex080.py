lista = []
for c in range(0,5):
    valor = int(input('Digite um valor: '))
    if c == 0 or valor > lista[-1]:
        lista.append(valor)
        print('Adicionado ao final da lista')
    #elif valor > lista[len(lista)-1]:  #ou lista[-1]
       # lista.append(valor)
    else:
        pos = 0
        while pos < len(lista):
            if valor < lista[pos]:
                lista.insert(pos, valor)
                print(f'Adicionado na posição {pos}...')
                break
            pos += 1
print(lista)
