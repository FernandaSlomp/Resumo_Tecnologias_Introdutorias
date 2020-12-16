import random
A1 = str(input('Digite um nome: '))
A2 = str(input('Digite um nome: '))
A3 = str(input('Digite um nome: '))
A4 = str(input('Digite um nome: '))
lista = [A1, A2, A3, A4]
random.shuffle(lista)
print('A ordem dos alunos é:')
print(lista)
