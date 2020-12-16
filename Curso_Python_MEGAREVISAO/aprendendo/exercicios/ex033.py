n1 = float(input('Diga o primeiro valor '))
n2 = float(input('Diga o segundo valor '))
n3 = float(input('Diga o terceiro valor '))
if n1 < n2 and n1 < n3:
    print(f'O menor valor é {n1}')
if n2 < n1 and n2 < n3:
    print(f'O menor valor é {n2}')
if n3 < n1 and n3 < n2:
    print(f'O menor valor é {n3}')
