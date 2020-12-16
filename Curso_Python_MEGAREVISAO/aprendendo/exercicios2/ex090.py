tentando = []
dados = {'nome': 'x', 'media': 'y'}
nome = str(input('Nome: '))
media = int(input(f'A média de {nome}: '))
dados['x'] = nome
dados['y'] = media
print(f'O nome é igual a {nome}')
print(f'A média é igual a {media}')
if media >= 7:
    print('Situação é aprovado!')
else:
    print('DESAPROVADO!')