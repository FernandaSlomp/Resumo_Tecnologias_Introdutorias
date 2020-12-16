km = float(input('Diga quantos KM tem sua viagem: '))
if km <= 200:
    print(f'Viagem curta: Você terá que pagar {km * 0.50}R$')
else:
    print(f'Você terá que pagar {km * 0.45}R$')
