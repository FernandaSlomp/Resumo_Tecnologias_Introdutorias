--DATAPART funcoes acoes especificas ver documentação da linguagem 
SELECT informação que quer buscar, DATEPART(variavelq quer, coluna da data)
from Sales.SalesOrderHeader -- qual tabela q esta

SELECT SalesOrderID, DATEPART(month, OrderDate)
from Sales.SalesOrderHeader

select avg(totaldue) as media, DATEPART(month, OrderDate) as mes
from sales.SalesOrderHeader
group by DATEPART(month, orderdate)
order by mes
