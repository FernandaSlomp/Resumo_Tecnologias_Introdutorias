-- IN -- USA JUNTO COM WHERE

valor IN (valor1,valor2)
color IN ('blue', 'red')
valor IN (SELECT valor FROM nomeDaTabela) -- subselect ou subquery - 

SELECT *
FROM Person.Person
WHERE BusinessEntityID IN (2,7,13)