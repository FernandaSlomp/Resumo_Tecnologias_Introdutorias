from datetime import date
atual = date.today().year
totalmaior = 0
totalmenor = 0
for c in range(1,8):
    ano = int(input(f'qual o {c} ano de nascimento? '))
    idade = atual - ano
    if idade >= 18:
            totalmaior +=1
    else:
            totalmenor +=1
print(f'Ao todo tivemos {totalmaior} maior, e {totalmenor} menor.')
