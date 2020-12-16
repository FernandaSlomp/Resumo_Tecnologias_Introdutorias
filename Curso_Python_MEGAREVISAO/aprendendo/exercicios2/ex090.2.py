aluno = dict()
aluno['nome'] = str(input('Nome: '))
aluno['media'] = float(input(f'Média de {"nome"} é: '))
if aluno['media'] >= 7:
    aluno['Situação'] = 'aprovado'
elif 5<= aluno['media'] <7:
    aluno['Situação'] = 'Recuperação'
else:
    aluno['Situação'] = 'Reprovado'

for k, v in aluno.items():
    print(f'{k} igual a {v}')