--DESAFIOS

-- 01 Identificar provincias(stateprovinceID) com maior numero de cadastros em nosso sistema . quais provincias estão cadastradas mais que 1000 vezes

SELECT StateProvinceID, count(stateprovinceID) as "quantidade"
FROM person.Address
GROUP BY StateProvinceID
HAVING count(stateprovinceID) > 1000

-- 02 quais produtos (productID) não trazem em média 1milhao de vendas (line total)

SELECT ProductID, AVG(linetotal)
FROM Sales.SalesOrderDetail
group by ProductID
HAVING avg(linetotal) < 10000
