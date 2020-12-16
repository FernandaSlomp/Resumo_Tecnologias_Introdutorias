peso = float(input('Qual o seu peso? KG '))
altura = float(input('Qual a sua altura? M '))
calculo = peso / (altura **2)
print(f'O IMC da pessoa é: {calculo:.2f}')
if calculo < 18.5:
    print('Você está a baixo do peso! ')
elif calculo >= 18.5 and calculo < 25:
    print('Você está no peso ideal!')
elif calculo >= 25 and calculo < 30:
    print('Sobrepeso!')
elif calculo >= 30 and calculo < 40:
    print('Obesidade')
else:
    print('Obesidade Morbida')