from random import randint
print('=-'*15)
print('VAMOS JOGAR PAR OU IMPAR! ')
print('=-'*15)
v = 0
while True:
    numero = int(input('Diga um valor: '))
    computador = randint(0,10)
    total = numero + computador
    parimpar= ' '
    while parimpar not in 'PI':
        parimpar = str(input('Par ou Ímpar [P/I}: ')).upper().strip()[0]
    if parimpar == 'P':
        if total % 2 ==0:
            print('you win! ')
            v += 1
        else:
            print('Você perdeu')
            break
    elif parimpar == 'I':
        if total == 1:
            print('Você venceu! ')
        else:
            print('Você perdeu!')
            break
    print('Vamos jogar novamente! ')
print(f'Você venceu {v} vezes')