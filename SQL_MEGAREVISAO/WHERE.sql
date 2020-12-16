-- WHERE 
SELECT coluna1, coluna2, coluna_n
FROM tabela
WHERE condicao -- operadores 

-- aplicacao 

SELECT *
FROM Person.Person
WHERE LastName = 'miller'and FirstName = 'anna'

SELECT *
FROM Production.Product
WHERE color = 'blue' or color = 'black'

SELECT *
FROM Production.Product
WHERE ListPrice > 1500

SELECT *
FROM Production.Product
WHERE ListPrice > 1500 and ListPrice < 5000

SELECT * -- <> diferente
FROM Production.Product
WHERE color <> 'red'

--DESAFIO1 - Filtrar o nome de todas peças mais 500kg e menos de 700kg

SELECT Name
FROM Production.Product
WHERE Weight > 500 and Weight < 700

DESAFIO2 - EMPREGADOS CASADO E ASSALARIADOS 

SELECT *
From HumanResources.Employee
WHERE MaritalStatus = 'S' and SalariedFlag = '1'

DESAFIO03 - email do Peter Krebs 

SELECT *
From Person.Person
WHERE FirstName = 'Peter' and LastName = 'Krebs';

SELECT *
FROM person.EmailAddress
WHERE BusinessEntityID = 26
