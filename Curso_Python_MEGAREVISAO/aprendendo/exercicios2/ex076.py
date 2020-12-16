listagem = ('Pão', 1, 'leite', 3.5, 'frango', 10.90)
print('--'*20)
print('           LISTAGEM DE PREÇOS ')
print('--'*20)
for pos in range(0, len(listagem)):
    if pos % 2 == 0:
        print(f'{listagem[pos]:.<30}', end= '')
    else:
        print(f'R${listagem[pos]:>10}')