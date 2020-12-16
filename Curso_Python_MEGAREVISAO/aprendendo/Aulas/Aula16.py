#lanche = (tupla) [lista] {dicionário}
lanche = ('hamburguer', 'suco', 'pizza', 'pudim')
#tuplas são imutáveis
#lanche[1] = 'refri' # da erro
'''for cont in range(0, len(lanche)): ##quando precisar mostrar a posição essa
                                    #opção é a melhor
    print(cont)
    print(lanche[cont]) #mostra cada item da lista
    print(f'Eu vou comer {lanche[cont]}')'''''


''''for comida in lanche:   ##mais fácil quando não precisa de posição 
    print(f'Eu vou comer {comida}')
print('comi pra caramba ')
print(len(lanche))'''''

for pos, comida in enumerate(lanche):   #da a posição!
    print(f'Eu comi {comida} e na posição {pos}')



print(lanche[3])
print(lanche[-2])
print(lanche[1:3])
print(lanche[2:])
print(lanche[:2])
print(lanche[-2:])
print(sorted(lanche)) ## organiza em ordem