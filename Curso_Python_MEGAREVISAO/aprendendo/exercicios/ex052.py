numero = int(input('Diga um número: '))
total = 0
for c in range(1, numero+1):
    if numero % c == 0:
        print(c, 'sim')
        total += 1
    else:
        print(c, 'não')
print(f'O número {numero} foi divisivel {total} vezes')
if total == 2:
    print('é primo')
else:
    print('não é primo')
