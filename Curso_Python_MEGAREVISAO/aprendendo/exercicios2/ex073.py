times = ('Palmeiras', 'Corinthians' , 'Internacional', 'Cruzeiro', 'Santos', 'Grêmio',
         'Atlético Mineiro', 'Fluminense', 'Botafogo', 'Flamengo', 'São Paulo',
         'Vasco da Gama', 'Portuguesa', 'Bahia', 'Atlético Paranaense', 'Bangu',
         'Santa Cruz', 'America', 'Coritiba', 'Ponte Preta')

print(f'Os 5 primeiros colocados do campeonato são: {times[:5]}')
print(f'Os 4 últimos colocados do campeonato são: {times[-4:]}')
print(f'Os times em odem alfabética ficam: {sorted(times)}')
while True:
    escolha = str(input('Escolha um time para saber a posição: '))
    if escolha not in times:
            print('Tente novamente')
    else:
            print(f'Eu escolhi {escolha} e está na {times.index(escolha)+1}ª posição')
            break




