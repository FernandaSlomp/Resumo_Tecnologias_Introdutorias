-- JOIN -- INNER JOIN 

CLIENTE                        ENDERECO
- CLIENTEID					- ENDERECOID	
- NOME						- RUA
- ENDERECOID				- CIDADE

SELECT C.CLIENTEID, C.NOME, E.RUA, E.CIDADE
FROM CLIENTE C 
INNER JOIN ENDERECO E ON E.ENDERECOID = C.ENDERECOID

RES= 
2 | BRUNO | RUA | SP 

-- 1 - devolver:
-- BUSINESSENTITY, FIRST NAME, LASTNAME, EMAILADRESS

SELECT TOP 10 *
FROM Person.Person

SELECT TOP 10 *
FROM Person.EmailAddress

-- COLUNA EM COMUM BusinessEntityID

SELECT p.BusinessEntityID, p.FirstName, p.LastName, pe.Emailaddress
FROM Person.Person as P
INNER JOIN Person.EmailAddress PE on P.BusinessEntityID = PE.BusinessEntityID

-- 2 devolver listprice, nome produto, nome subcategoria 

SELECT TOP 10 *
FROM Production.Product

SELECT TOP 10 *
FROM Production.ProductCategory

-- coluna em comum productsubcategorymo

SELECT pr.listprice, pr.name, pc.name
FROM Production.product pr
INNER JOIN Production.ProductSubcategory PC 
on PC.ProductSubcategoryID = pr.ProductSubcategoryID

-- 3 juntar tudo

SELECT TOP 10 *
FROM Person.BusinessEntityAddress

SELECT TOP 10 *
FROM Person.Address

--se quer juntar tudo:  chamado de produto cartesiano

SELECT TOP 10 *
FROM person.BusinessEntityAddress BA
INNER JOIN Person.Address PA on PA.AddressID = BA.AddressID

-- DESAFIO1:  JUNTAR DUAS TABELAS - 

Select top 2 *
from Person.PhoneNumberType

select top 2*
from person.PersonPhone

--com o resultado: businessentityID, name, phonenumbertypeid, phonenumber

select pt.name, pp.BusinessEntityID, pp.PhoneNumber
from Person.PersonPhone PP
inner join person.PhoneNumberType PT on PT.PhoneNumberTypeID = PP.PhoneNumberTypeID

-- DESAFIO 02: JUNTAR AS DUAS TABELAS - 

Select top 1*
from Person.StateProvince

select top 1*
from person.Address

--quero AdressId, cITY, sTATEpROVICEid, nOME DO ESTADO

Select pa.AddressID, pa.city, ps.name, ps.StateProvinceID
from Person.Address pa
inner join Person.StateProvince PS on PS.StateProvinceID = PA.StateProvinceID 


