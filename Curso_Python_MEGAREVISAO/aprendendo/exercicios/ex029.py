velocidade = float(input('Qual a velocidade atual do carro? '))
if velocidade < 80:
    print('Ótimo você não ganhou multa')
else:
    print(f'Parabéns você recebeu uma multa de {(velocidade - 80)*7:.2f}R$')