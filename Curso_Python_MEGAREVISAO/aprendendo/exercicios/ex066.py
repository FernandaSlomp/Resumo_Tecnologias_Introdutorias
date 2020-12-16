numero = quant = soma =  0
while True:
    numero = int(input('Diga um número (999 para o programa):  '))
    if numero == 999:
        break
    quant += 1
    soma += numero
print(f'O total de números digitados é {quant} e a soma ficou {soma}')