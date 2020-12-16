'''for c in range(1,10):
    print(c)
print('FIM')'''

'''c = 1
while c <10:
    print(c)
    c += 1
print('FIM')'''

'''for c in range(1,3): #usa for quando sabe quantos valores sao
    n = int(input('DIGITE um valor'))
print('FIM')'''

'''n = 1
while n != 0:
    n = int(input('digite um numero: '))
print('FIM')'''

r = 'S'
'''while r =='S':
    n = int(input('digite um numero: '))
    r = str(input('Quer continuar? ')).upper()
print('FIM')'''

n = 1
par = impar = 0
while n !=0:
    n = int(input('digite um valor: '))
    if n != 0:
        if n %2 ==0:
            par += 1
        else:
            impar += 1
print('cabou')
print(f'voce digitou {par} par e {impar} impar')
