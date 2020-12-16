-- AS - renomear colunas 

-- DESAFIO
-- 1 encontrar FirstName e Last name e colocar em pt

SELECT LastName as "ultimo nome", FirstName as "primeiro nome"
FROM Person.Person

-- 2 encontrar productname "numero do produto"

SELECT ProductNumber as "numero do produto"
FROM Production.Product

-- 3 unitpreco para preco unitario

SELECT UnitPrice as "preço unitario"
FROM Sales.SalesOrderDetail