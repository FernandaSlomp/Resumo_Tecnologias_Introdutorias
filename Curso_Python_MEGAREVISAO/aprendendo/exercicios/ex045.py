from random import randint
itens = ('PEDRA' , 'PAPEL', 'TESOURA')
computador = randint(0, 2)
print('''Escolha entre
[ 0 ] PEDRA
[ 1 ] PAPEL
[ 2 ] TESOURA''')
jogador = int(input('  DALHE:            '))
while jogador <0 or jogador >2: # Se o jogador escolher a opção errada
    jogador = int(input('\033[0;31mJOGADA INVÁLIDA\033[m, Escolha entre 0 e 2:'))
print('-----'*20)
print('''JO
KEN
PO!!!''')
print('-----'*20)
print(f'O computador jogou {itens[computador]}')
print(f'Jogador jogou {itens[jogador]}')
print('-----'*20)
if computador == 0:
    if jogador == 0:
        print('EMPATE')
    elif jogador == 1:
        print('JOGADOR GANHOU ')
    elif jogador == 2:
        print(' COMPUTADOR VENCEU ')
    else:
        print('JOGADA INVÁLIDA! ')
elif computador == 1:
    if jogador == 0:
        print('COMPUTADOR VENCEU ')
    elif jogador == 1:
        print('EMPATE ')
    elif jogador == 2:
        print(' JOGADOR VENCEU ')
    else:
        print('JOGADA INVÁLIDA! ')
if computador == 2:
    if jogador == 0:
        print('JOGADOR VENCE')
    elif jogador == 1:
        print('COMPUTADOR GANHOU ')
    elif jogador == 2:
        print(' EMPATE ')
    else:
        print('JOGADA INVÁLIDA! ')
