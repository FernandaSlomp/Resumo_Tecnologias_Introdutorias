from random import randint
tupla = (randint(1,10), randint(1,10), randint(1,10), randint(1,10), randint(1,10),)
print(f'Os valores sorteados foram:', end='')
for n in tupla:
    print(f'{n} ',end= '')

print(f'\no maior número da lista é {sorted(tupla)[-1]}')
print(f'\nO maior valor é: {max(tupla)}')
print(f'O menor valor é: {min(tupla)}')