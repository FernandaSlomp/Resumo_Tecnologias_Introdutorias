-- HAVING -- filtrados dados agrupados pelo groupby
-- where para dados agrupados
-- usado depois de agrupar 

SELECT coluna1, funcaoagregacao(coluna2)
FROM nomeTabela
GROUP BY coluna1
HAVING condicao

-- quais nomes no sistema possuem uma ocorrencia maior que 10?

SELECT FirstName, count(firstname)
FROM Person.Person
GROUP BY FirstName
HAVING count(firstname) > 10

-- quais produtos que no total de vendas então entre 162k e 500k

SELECT ProductID,sum(linetotal) as "total"
FROM Sales.SalesOrderDetail
GROUP BY ProductID
HAVING SUM(LINETOTAL) between 162000 AND 500000


-- quais nomes no sistema possuem uma ocorrencia maior que 10? porem quando o titulo é 'Mr'

SELECT FirstName, count(firstname)
FROM Person.Person
WHERE Title = 'Mr.'
GROUP BY FirstName
HAVING count(firstname) > 10
