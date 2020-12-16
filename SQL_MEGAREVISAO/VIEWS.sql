-- VIEWS -- EXTRAIR INFOS DE TABELAS EXISTENTES SEM PRECISAR DE TODOS OS DADOS / TODAS TABELAS 

CREATE VIEW [pessoas Simplificando] AS
SELECT FirstName, middleName, LastName
FROM person.person
WHERE Title = 'Ms.'

select *
from [pessoas Simplificando]