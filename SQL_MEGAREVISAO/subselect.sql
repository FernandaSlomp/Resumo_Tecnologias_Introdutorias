--SUBSELECT

--monte relatorio de todos produtos que tem preco de venda acima da media 

select avg(listprice)
from Production.Product

select *
from Production.Product
where ListPrice > 438.66

select * 
from Production.Product
where ListPrice > (select avg(ListPrice) from Production.Product)

---

--encontre o nome dos funcionarios com cargo de design engineer

select *
from Person.Person
where BusinessEntityID in (5,6,15)

select *
from HumanResources.Employee
where JobTitle = 'design engineer'


select FirstName
from person.Person
where BusinessEntityID in (select BusinessEntityID from HumanResources.Employee where JobTitle = 'design engineer')

select p.FIRStname
from Person.Person p
inner join HumanResources.Employee e on p.BusinessEntityID = e.BusinessEntityID and e.JobTitle = 'design engineer'

-- trazer todos os endereços que estão no estado de alberta

select *
from Person.Address

select * 
from person.StateProvince

select *
from Person.Address
where StateProvinceID in (select StateProvinceID from Person.StateProvince where name = 'Alberta')