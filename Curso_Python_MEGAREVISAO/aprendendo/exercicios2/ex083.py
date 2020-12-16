expressao = str(input('Digite uma expressão: '))
pilha = []
for simb in expressao:
    if simb == '(':
        pilha.append('(')

    elif simb == ')':
        if len(pilha) > 0:
            pilha.pop()
        else:
            pilha.append(')')
            break
if len(pilha) == 0:
    print('Acertou!')
else:
    print('EROU')
'''''''''    
exp = str(input('Digite uma expressão: '))

if exp.count('(') == exp.count(')'):
    print('Sua expressão é válida!!')
else:
    print('Sua expressão não é válida')'''''