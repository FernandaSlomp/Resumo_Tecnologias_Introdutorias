temp = []
princi = []
mai = men = 0
while True:
    temp.append(str(input('nome: ')))
    temp.append(int(input('peso ')))
    if len(princi) == 0:
        mai = men = temp[1]
    else:
        if temp[1] > mai:
            mai = temp[1]
        if temp[1] < men:
            men = temp[1]
    princi.append(temp[:])
    temp.clear()
    resp = str(input('Continuar? ')).upper().strip()[0]
    if resp == 'N':
        break
#print(f'Os dados foram: {princi}')
print(f'Ao todo foram {len(princi)} pessoas!')
print(f'O menor peso foi {men}')
for p in princi:
    if p[1] == men:
        print(f'{p[0]}')
print(f'O maior peso {mai}')
for p in princi:
    if p[1] == mai:
        print(f'{p[0]}')