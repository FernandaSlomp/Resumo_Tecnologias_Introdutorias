print('---'*10)
print('      10 TERMOS DE UM PA       ')
print('---'*10)
primeiro = int(input('Primeiro termo: '))
razao = int(input('Diga a razão: '))
decimo = primeiro + ( 10-1 ) * razao
for c in range(primeiro, decimo + razao ,razao):
    print(c, end=' > ')
print('ACABOU!')