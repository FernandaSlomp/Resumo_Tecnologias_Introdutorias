c = tabuada = 0
numero = int(input('Quer ver a tabuada de qual número? '))
print('_____'*10)
while True:
    if numero < 0:
        break
    for c in range(1,11):
        tabuada = c * numero
        print(f'{c} x {numero} =', tabuada)
    numero = int(input('Quer ver a tabuada de qual número? '))
