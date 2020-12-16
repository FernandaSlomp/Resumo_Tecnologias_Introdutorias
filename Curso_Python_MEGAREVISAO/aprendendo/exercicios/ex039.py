from datetime import date
atual = date.today().year
ano = int(input('Diga seu ano de nascimento: '))
conversao = atual-ano
if conversao < 18:
    print(f'faltam {18 -conversao } anos para você se alistar!')
elif conversao == 18:
    print('Está na hora de você se alistar')
else:
    print(f'já passou {conversao-18} do seu alistamento')
