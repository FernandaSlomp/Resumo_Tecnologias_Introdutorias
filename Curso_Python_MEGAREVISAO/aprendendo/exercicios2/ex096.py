time = []
dados = {}
partidas = []
while True:
    dados['nome'] = str(input('Qual o nome do jogador: '))
    total = int(input(f'Quantas partidas o {dados["nome"]} jogou: '))
    for c in range(0, total):
        partidas.append(int(input(f'Quantos gols na partida {c}? ')))
    dados['gols'] = partidas[:]
    dados['total'] = sum(partidas)
    while True:
    continuar = str(input('Quer continuar? [S/N]')).upper().strip()[0]
        if continuar == 'N':
            break
print(dados)
for c,v in dados.items():
    print(f'O campo {c} tem o valor {v}')
for i, v in enumerate(dados['gols']):
    print(f'na partida {i}, fez {v} gols')
print(f'Foi um total de {dados["total"]} gols')
