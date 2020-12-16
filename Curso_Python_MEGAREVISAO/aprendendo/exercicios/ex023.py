#numero = int(input('Digite um número de 0 a 9999: '))
#n = str(numero)
#print(f'unidade: {n[3]}')
#print(f'dezena: {n[2]}')                   ESSE DA ERRO 
#print(f'centena: {n[1]}')
#print(f'milhar: {n[0]} ')

numero = int(input('Digite um número de 0 a 9999: '))
u = numero // 1 % 10
d = numero // 10 % 10
c = numero // 100 % 10
m = numero // 1000 % 10
print(f'unidade: {u}')
print(f'dezena: {d}')
print(f'centena: {c}')
print(f'milhar: {m} ')