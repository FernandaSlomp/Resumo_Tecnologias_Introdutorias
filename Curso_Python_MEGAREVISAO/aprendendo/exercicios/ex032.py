from datetime import date
data = int(input('Qual o ano que você quer analisar? Coloque 0 para o ano atual: '))
if data == 0:
    data = date.today().year
if data %4 == 0 and data % 100 != 0 or data % 400 == 0:
    print('é bisexto')
else:
    print('Não é bisexto')