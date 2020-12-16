salario = float(input('Qual o seu salário? '))
if salario > 1250:
    print(f'Seu salário atual é: {salario + (salario*10/100)}')
else:
    print(f'Seu salário atual é: {salario + (salario*15/100)}')