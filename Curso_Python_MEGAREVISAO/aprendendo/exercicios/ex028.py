from random import randint
computador = randint(0,5)
jogador = int(input('Pense em um número de 0 a 5: '))
if jogador == computador:
    print('ACERTOU MIZERAVI')
else:
    print(f'erou pensei no número {computador}')
