ficha = list()
while True:
    nome = str(input('nome: '))
    nota1 = int(input('Nota 1: '))
    nota2 = int(input('Nota 2: '))
    media = (nota1 + nota2) /2
    ficha.append([nome, [nota1, nota2], media])
    resposta = str(input('Quer continuar? [N/S]')).upper().strip()[0]
    if resposta in 'N':
        break
print('=='*20)
print(f'{"No.":4}{"NOME":<10}{"MÉDIA":>8}')
print('=='*20)
for i, a, in enumerate(ficha):
    print(f'{i:<4}{a[0]:<10}{a[2]:>8.1f}')
while True:
    print('=='*20)
    opc = int(input('Informar a nota de qual aluno?(999 interrompe) '))
    if opc == 999:
        print('Finalizado')
        break
    if opc <=len(ficha)-1:
        print(f'As notas do {ficha[opc][0]} são {ficha[opc][1]}')
print('<<<<VOLTE SEMPRE>>>>>')