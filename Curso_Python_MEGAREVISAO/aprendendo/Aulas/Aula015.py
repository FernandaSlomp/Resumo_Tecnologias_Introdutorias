n = s = 0
while True:  ###n != 999:
    n = int(input('Diga um número: '))
    if n == 999:
        break
    s += n

print(f'A soma é {s}')