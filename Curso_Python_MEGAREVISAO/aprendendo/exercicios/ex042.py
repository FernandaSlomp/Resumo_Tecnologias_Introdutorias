n1 = float(input('Diga o primeiro segmento: '))
n2 = float(input('Diga o segundo segmento: '))
n3 = float(input('Diga o terceiro segmento: '))
if n1 < n2 + n3 and n2 < n1 + n3 and n3 < n2 + n1:
    print('Forma triângulo')
    if n1 == n2 == n3:
        print('EQUILÁTERO')
    elif n1 != n2 != n3 != n1:
        print('ESCALENO!')
    else:
        print('ISÓSCELES')
else:
    ('não forma triangulo! ')
