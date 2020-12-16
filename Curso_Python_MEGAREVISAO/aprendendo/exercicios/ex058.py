from random import randint
computador = randint(0, 11)
conta = 0
jogador = int(input('acerte o número entre 0 e 10 que o pc esta pensando: '))
while computador != jogador:
    if jogador < computador:
        print('Mais....')
    elif jogador > computador:
        print('menos....')
    jogador = int(input('Errou! escolha outro número: '))
    if computador != jogador:
        conta += 1
print(f'Acertou o pc pensou {computador} e você pensou {jogador}')
print(f'VocÊ demorou {conta} tentativas para acertar.')