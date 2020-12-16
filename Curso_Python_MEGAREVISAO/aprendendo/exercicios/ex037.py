numero = int(input('Digite um número inteiro: '))
print('''Escolha uma das bases para a conversão
[1] converter para binário
[2] converter para octal
[3] converter para hexadecimal''')
opcao = int(input('Sua opção: '))
if opcao == 1:
    print(f'{numero} em binário é igual a {bin(numero)}')
elif opcao == 2:
    print(f'O {numero} em octal é {oct(numero)}')
elif opcao == 3:
    print(f'O {numero} em hexadecimal é igual a {hex(numero)}')
else:
    print('Opção invalida')

