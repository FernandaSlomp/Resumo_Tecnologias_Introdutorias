from datetime import date
ano = int(input('Qual ano você nasceu? '))
atual = date.today().year
idade = atual - ano
print(f'O atleta tem {idade} anos')
if idade <= 9:
    print('Sua categoria é MIRIM.')
elif idade <=14:
    print('Sua categoria é INFANTIL')
elif idade <=19:
    print('Sua categoria é JUNIOR')
elif idade <= 25:
    print('Sua categoria é SÊNIOR')
else:
    print('MASTER')