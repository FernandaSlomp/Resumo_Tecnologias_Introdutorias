'''from math import factorial
n1 = float(input('Escolha um número: '))
fatorial = factorial(n1)
print(f'O fatorial de {n1}! = {fatorial} ')'''

n1 = float(input('Escolha um número: '))
c = n1
f = 1
print(f'Calculando {n1}!..', end=' ')
while c > 0:
    print(f'{c}', end=' ')
    print(f'x' if c >1 else '=', end=' ')
    f*= c
    c -= 1
print(f'{f}')