sexo = str(input('Digite seu sexo [M/F] ')).upper().strip()[0]
while sexo not in 'MF':
       sexo = str(input('Sexo inválido digite novamente entre M ou F: '))
print(f'SEXO {sexo} com sucesso! ')

