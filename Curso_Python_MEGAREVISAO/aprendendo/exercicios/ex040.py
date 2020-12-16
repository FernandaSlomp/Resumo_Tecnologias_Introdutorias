n1 = float(input('Diga sua primeira nota: '))
n2 = float(input('Diga sua segunda nota: '))
media = (n1 + n2)/2
if media < 5:
    print('média abaixo de 5:\033[4;33;44m REPROVADO\033[m')
elif media >= 5 and media < 6.9:
    print('Recuperação')
else:
    print('Aprovado!')
