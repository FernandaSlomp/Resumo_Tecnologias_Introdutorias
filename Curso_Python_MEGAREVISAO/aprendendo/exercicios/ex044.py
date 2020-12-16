preco = float(input('Qual o preço a ser pago? '))
print('''escolha a condição de pagamento
[ 1 ] à vista dinheiro/cheque.
[ 2 ] à vista cartão 
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão''')
pagamento = int(input('Qual a opção? '))
if pagamento == 1:
    total = preco * 10/100
elif pagamento == 2:
    total = preco - (preco * 5 / 100)
elif pagamento == 3:
    total = preco
    parcela = total/2
    print(f'Sua compra será parcelada em 2x de {parcela}')
elif pagamento == 4:
    total = preco + (preco * 20/100)
    totparc = int(input('Quantas parcelas? '))
    parcela = total/totparc
    print(f'Sua compra sera parcelada em {totparc}x de {parcela:.2f} COM JUROS ')
else:
    total = preco
    print('Opção inválida!')
print(f'Sua compra de {preco} sairá {total} no total')



