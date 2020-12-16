palavras = ('aprender', 'fernanda', 'coco', 'maionese')
vogais = ('a', 'e', 'i', 'o', 'u')
for pos in palavras:
    print(f'\nna palavra {pos} temos ', end= '')
    for letra in pos:
        if letra.lower() in vogais:
            print(letra, end= ' ')