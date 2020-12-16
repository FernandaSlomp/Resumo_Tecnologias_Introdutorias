frase = str(input('Digite uma frase: ')).strip().upper()
palavras = frase.split() #separa em palavras
junto = ''.join(palavras)
inverso = ''
for letra in range(len(junto) - 1, -1, -1):
    inverso += junto[letra]
print(inverso)
if inverso == frase:
    print('TEMOS UM PALINDROMO')
else:
    print('A frase não é palindromo')