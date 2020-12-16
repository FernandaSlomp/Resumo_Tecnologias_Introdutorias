--UNION - combina dois ou mais resultados de um select em um resultado apenas

select	coluna1, coluna2
From tabela1
UNION --sem os duplicados UNION ALL -- com os duplicados 
select coluna1, coluna2
from tabela2


-- exs
select [productID], [name], [productNumber]
from Production.Product
where name like '%chain%'
union	
select [productID], [name], [productNumber]
from Production.Product
where name like '%decal%'
order by name desc

select firstname, title, MiddleName
from Person.Person
where title ='Mr.'
union 
select firstname, title	, MiddleName
from Person.Person
where MiddleName ='A'
