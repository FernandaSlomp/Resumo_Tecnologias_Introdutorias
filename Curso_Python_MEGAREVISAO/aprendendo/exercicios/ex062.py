primeiro = int(input('Diga o primeiro termo: '))
razao = int(input('Diga a razão: '))
termo = primeiro
cont = 1
total = 0
mais = 10
while mais!= 0:
    total += mais
    while cont <= total:
        print(f'{termo} > ', end='')
        termo += razao  # termo mais a razao
        cont += 1
    print('PAUSA!')
    mais = int(input('Quantos você quer mostrar a mais? '))
print(f'FIM! {total}')

