estado = dict()
brasil = list()
for c in range(0,3):
    estado['uf'] = str(input('Unidade Federativa: '))
    estado['sigla'] = str(input('Sigla do estado: '))
    brasil.append(estado.copy()) #mesma coisa q fatiar a lista e copiar [:]
for e in brasil:
    for k, v in e.items():
        print(f'O campo {k} tem valor {v}')
        print(v, end=' ')
print(brasil)