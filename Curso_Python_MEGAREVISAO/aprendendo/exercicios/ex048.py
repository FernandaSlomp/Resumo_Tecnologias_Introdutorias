soma = 0
cont = 0
for conta in range(1, 501, 2):
    if conta % 3 == 0:
        cont += 1  #números que foram somados ou 'cont = cont + 1'
        soma = soma + conta  #numeros somados
print(f'A soma de {cont} valores impares e divididos por 3 é: {soma}')
