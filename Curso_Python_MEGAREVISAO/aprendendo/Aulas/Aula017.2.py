a = [2, 3, 4, 7]
#b = a #faz uma ligação
b = a[:]  #não faz uma ligação! pq criou uma cópia dos valores de a
b[2] = 8
print(f'Lista A:{a}')
print(f'Lista B:{b}')