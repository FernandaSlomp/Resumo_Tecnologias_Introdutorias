-- 1 --quantos produtos cadastrados custam mias de 1500
SELECT count(*) -- or (ListPrice)
FROM Production.Product
where ListPrice > 1500

-- 2 quantas pessoas tem o sobrenome com a inicial p?

SELECT count(LastName)
FROM Person.Person
where LastName like 'P%'

-- 3 quantas cidades unicas estão cadastrados os clientes
SELECT count(DISTINCT City)
FROM Person.Address

--or 

SELECT count(distinct(City))
FROM Person.Address

-- 4 quais são as cidades unicas?

SELECT DISTINCT(city)
FROM Person.Address

-- 5 quantos produtos vermelho preco 500 a 1000 dolares

SELECT count(*)
FROM Production.Product
WHERE color = 'red' and ListPrice between 500 and 1000

-- 6 quantos produtos tem  palavra road no nome deles?

SELECT count(*) --(name)
FROM Production.Product
WHERE name like '%road%'