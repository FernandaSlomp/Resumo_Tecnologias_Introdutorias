numero = 0
soma = 0
cont = 0
numero = int(input('Diga um número se se for 999 ele para! '))
while numero != 999:
    cont += 1
    soma += numero
    numero = int(input('Diga um número se se for 999 ele para! '))
print(f'A soma total é: {soma}')
