A                    B
id nome 			id nome
--					--
1 Robo				1 espada			
2 macaco			2 robo
3 samurai			3 mario
4 monitor 			4 samurai

inner join = retorna apenas os resultados que correspondem nas duas tabelas

return = 
1 - robo 			 2 - robo
3 - samura 			4 - samurai

Full outer join = retorna todos e preeche com null

return = 
1 robo 			2 robo
2 macaco 		null null 


left outer join or left join= retorna conjunto de todos registros da tabela A.

-- descobrir quais pessoas tem um cartão de credito registrado 

SELECT *
FROM Person.Person pp
left join sales.PersonCreditCard pc
on pp.BusinessEntityID = pc.BusinessEntityID
Where pc.BusinessEntityID is null

--inner join: 12.118 linhas 
-- left join 19.972 linhas //vai incluir resultados onde não estão presentes os resultados --
-- de cartao de credito // estrair quais não tem
--Diferença de 854 pessoas 