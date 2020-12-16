--JA TEM TABELA E QUER INSERIR DADOS NELA OU CRIAR NOVA

INSERT INTO nomeTabela(coluna1, coluna2, ...)
VALUES(valor1, valor2)
VALUES(valor1, valor2)
VALUES(valor1, valor2)

-- INSERIR PRA UMA JÁ EXISTENTE 
INSERT INTO TabelaA (coluna1)
SELECT coluna2 
FROM TabelaB


--
CREATE Table aula(
id int primary key,
nome varchar(200)

)

select *
from aula

-- um valor
INSERT INTO aula(id, nome)
values(1,'aula 01')

-- varios
INSERT INTO aula(id, nome)
values
(2,'aula 02'),
(3,'aula 03'),
(4,'aula 04')

-- DESAFIO 
-- criar tabela, inserir uma linha de dados nela, inserir 3 linhas de dados ao mesmo tempo, criar segunda tabela, inserir 1 linha nessa tabela nova, copie os dados da segunda tabela para a primeira 

CREATE table DESAFIO(
id int primary key,
nome varchar(150),
data date
);

INSERT INTO DESAFIO(id, nome, data)
VALUES
(05, 'DESAFIO 05', '17/12/2015')


-- 

INSERT INTO DESAFIO(id, nome, data)
select id, nome, data
from desafio02


select *
from DESAFIO

select *
from desafio02