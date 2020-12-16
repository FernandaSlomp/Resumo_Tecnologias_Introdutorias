pessoas = {'nome': 'Fernanda', 'sexo': 'F', 'idade': 20}
#del pessoas ['sexo'] # elemento apagado
pessoas['nome'] ='Leando'   #troca append
print(f'O {pessoas["nome"]} tem {pessoas["idade"]} anos')
print(pessoas.keys())
print(pessoas.items())
print(pessoas.values())

for k, v in pessoas.items(): #para cada valor k só os keys
    print(f'{k} = {v}')
