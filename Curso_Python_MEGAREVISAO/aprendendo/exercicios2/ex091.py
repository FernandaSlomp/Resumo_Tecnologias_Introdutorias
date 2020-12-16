from random import randint
from time import sleep
from operator import itemgetter
dados = {}
ranking = ()
print('Valores sorteados!')
for c in range(1,5):
    dados[f'jogador{c}'] = randint(1,6)
for k, v in dados.items():
    sleep(1)
    print(f'O {k} tirou {v}')
ranking = sorted(dados.items(), key=itemgetter(1), reverse=True)
print('ranking!')
for i, v in enumerate(ranking):
    print(f'O {i+1} lugar é {v[0]} com {v[1]} pontos ')
    sleep(1)
#for k, v in dados.items():
