soma = quant = media = maior =  menor = 0
continuar = 'S'
while continuar in 'Ss':
    numero = int(input('Diga um número: '))
    soma += numero
    quant += 1
    if quant == 1:
        maior = menor = numero
    else:
        if numero > maior:
            maior = numero
        if numero < menor:
            menor = numero
    continuar = str(input('Quer continuar? [N/S]  ')).upper().strip()[0]
media = soma / quant
print(f'vc digitou {quant} numeros e A média foi {media}')
print(f'O maior número foi {maior} e o númerofoi {menor}')
