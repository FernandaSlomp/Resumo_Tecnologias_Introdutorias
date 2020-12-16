casa = float(input('Qual o valor da casa? '))
salario = float(input('Qual o seu salário? '))
anos = float(input('Em quantos anos você deseja pagar? '))
calculo = casa / (12 *anos)
if calculo <= salario * 30/100:
    print(f'O valor a ser pago por mes é: {calculo}')
else:
    print(f'Empréstimo negado!')