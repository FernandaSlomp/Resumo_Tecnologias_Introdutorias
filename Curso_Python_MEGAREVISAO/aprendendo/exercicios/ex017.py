import math
CO = float(input('Qual é o valor do cateto oposto?'))
CA = float(input('Qual é o valor do cateto adjacente?'))
#print(f'A sua hipotenusa é {(CO**2 + CA**2)** (1/2):.2f}')
print(f'A sua hipotenusa é {math.hypot(CO, CA):.2f}')
