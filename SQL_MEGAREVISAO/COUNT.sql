-- COUNT 
SELECT count(DISTINCT coluna1)
FROM TABELA

SELECT count(Title)
FROM Person.Person

SELECT count(DISTINCT Title)
FROM Person.Person

-- DESAFIO1
-- quantos produtos cadastrado tabela de produtos 

SELECT count(*)
FROM Production.Product

-- DESAFIO2
-- QUANTOS TAMANHOS UNICOS DE PRODUTOS TEM NA TABELA

SELECT count(DISTINCT Size)
FROM Production.Product
