-- DESAFIOS

-- 01 - QUANTAS PESSOAS TEM O MESMO MIDDLE NAME?

SELECT MiddleName, count(FirstName) -- (middlename)
from Person.Person
GROUP BY MiddleName

-- 02 - saber em media qual a quantidade(quantity) que cada produto é vendido na loja 

SELECT *
from Sales.SalesOrderDetail

SELECT ProductID, AVG(OrderQty)
from Sales.SalesOrderDetail
GROUP BY ProductID

-- 03 - foram as 10 vendas q no total tiveram os maiores valores de venda(line total) por produto do maior para o menor

SELECT TOP 10 ProductID, sum(linetotal)
from Sales.SalesOrderDetail
GROUP BY ProductID
ORDER BY SUM(LineTotal) DESC

-- 04 saber quantos produtos e a quantidade media de produtos cadastradas nas ordem de serviço(workorder) agrupados por productID

SELECT Productid, count(ProductID), avg(OrderQty) as "media"
FROM Production.WorkOrder 
GROUP BY ProductID