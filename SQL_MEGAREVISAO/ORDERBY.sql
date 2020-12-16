--ORDEM BY

SELECT coluna1,coluna2
FROM tabela
ORDER BY coluna1 asc/desc --crescente ou decrescente

SELECT *
FROM Person.Person
ORDER BY FirstName desc

SELECT *
FROM Person.Person
ORDER BY FirstName asc,LastName desc

SELECT FirstName, LastName --importante colocar ,midlename aq tbm
FROM Person.Person
ORDER BY MiddleName ASC

SELECT *
FROM Person.Person

--DESAFIO OBTER PROCUCTID  10 DO MAIS CARO AO MAIS BARATO

SELECT TOP 10 ProductID
FROM Production.Product
ORDER BY ListPrice desc

--DESAFIO ENCONTRAR NOME E NUMERO PRODUCTID ENTRE 1 - 4

SELECT ProductNumber, Name
FROM Production.Product
WHERE ProductID >= 1 and ProductID <= 4

--or 

SELECT TOP 4 ProductNumber, Name
FROM Production.Product
ORDER BY ProductID asc