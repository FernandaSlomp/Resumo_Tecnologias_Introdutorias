dias = int(input('Quantos dias alugados? '))
km = float(input('Quantos km rodados? '))
print(f'O preço total que você precisa pagar é de R${(dias*60)+ (km*0.15):.2f}')
