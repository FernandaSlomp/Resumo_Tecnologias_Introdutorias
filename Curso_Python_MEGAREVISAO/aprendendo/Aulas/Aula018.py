teste = list()
teste.append('fer')
teste.append(20)
galera = list()
galera.append(teste[:])  #faz uma cópia apenas
#galera.append(teste) ---> aqui fez uma ligação por isso deu erro
teste[0] = 'Maria'
teste[1] = 22
galera.append(teste[:])
print(galera)