-- group by - divide o resultado em grupos 

SELECT coluna1,funcaoAgregacao(coluna2)
from noemtabela
GROUP BY coluna1;



SELECT *
FROM SALES.SalesOrderDetail

SELECT SpecialOfferID, SUM(UnitPrice) as "SOMA2"
FROM Sales.SalesOrderDetail
GROUP BY SpecialOfferID

SELECT SpecialOfferID, UnitPrice
FROM Sales.SalesOrderDetail
WHERE SpecialOfferID = 9

-- quantos de cada produto foi vendido até hoje?

SELECT *
FROM SALES.SalesOrderDetail

SELECT ProductID, count(productID) --pegar quantos produtos do mesmo nome e contar
from Sales.SalesOrderDetail
GROUP BY ProductID

-- quantos nome de cada nome 

SELECT *
FROM Person.Person

select firstname, count(firstName) AS "CONTAGEM NOMES"
from Person.Person
GROUP BY FirstName

-- QUAL A MEDIA DE PREÇO DE PRODUTOS PRATAS?

SELECT *
FROM Production.Product

SELECT color ,AVG(listPrice)
FROM Production.Product
WHERE Color = 'SILVER'
GROUP BY Color

