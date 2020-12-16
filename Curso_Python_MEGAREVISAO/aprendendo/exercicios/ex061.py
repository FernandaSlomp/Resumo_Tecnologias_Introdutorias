primeiro = int(input('Diga o primeiro termo: '))
razao = int(input('Diga a razão: '))
termo = primeiro       #não é igual, quer dizer que vai começar com
cont = 1               #vai contar quantos termos foram
while cont <=10:
    print(f'{termo} > ', end= '')
    termo += razao  #termo mais a razao
    cont += 1
print('FIM!')