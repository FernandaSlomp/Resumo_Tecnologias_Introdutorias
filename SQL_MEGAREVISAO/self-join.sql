--SELF-JOIN -- SO USA COM AS

-- select nome_colina
-- from tabela a, tabela b
-- where condicao 

-- procurar todos os clientes que moram na mesma região

select A.ContactName, a.Region, b.Region, b.ContactName
from Customers A, Customers B
where A.Region = b.Region


-- encontrar nome e data de contratação de todos funcionarios contratados no mesmo ano

select a.FirstName, a.hiredate, b.firstname, b.hiredate
from Employees A, Employees B
where DATEPART(year, a.hiredate) = DATEPART(year, b.hiredate)

--DESAFIO --NA TABELA ORDER DETAILS QUAIS PRODUTOS TEM O MESMO PERCENTUAL DE DESCONTO

SELECT a.Discount, a.productId, B.discount, b.productID  
FROM [Order Details] A, [Order Details] B
where A.Discount = b.Discount