n1 = float(input('Diga o primeiro valor: '))
n2 = float(input('Diga o segundo valor: '))
nescolhido = 0
while nescolhido != 5:
    nescolhido = int(input('''Escolha oq deseja:
    [1] somar
    [2] multiplicar
    [3] maior
    [4] novos números
    [5] sair do programa
    Qual você escolhe? '''))
    if nescolhido == 1:
        print(f'O {n1} mais o {n2} é: {n1 + n2}')
    elif nescolhido ==2:
        print(f'O {n1} vezes o {n2} é: {n1 * n2}')
    elif nescolhido ==3:
        if n1 > n2:
            print(f'O maior número é {n1}')
        if n2 > n1:
            print(F'O maior número é {n2}')
    elif nescolhido == 4:
        print('Informe os números novamente')
        n1 = float(input('Diga o primeiro valor: '))
        n2 = float(input('Diga o segundo valor: '))
    elif nescolhido ==5:
        print('FINALIZANDO')
    else:
        print('opção inválida. Tente novamente')
print('FIM DO PROGRAMA! ')



