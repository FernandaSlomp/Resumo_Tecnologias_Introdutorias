-- seguir sintaxe

CREATE TABLE nomeTabela (
	coluna1 tipo restricaoDaColuna,
	coluna2 tipo,
	coluna3 tipo,
.....
)

--RESTRIÇOES -
-- NOT NULL
-- UNIQUE 
-- PRIMARY KEY - JUNÇAO DE NOT NULL E UNIQUE
-- FOREIGN KEY - IDENTIFICA UNICAMENTE UMA LINHA EM OUTRA TABELA
-- CHECK - FORÇA UMA CONFICÃO ESPECIFICA EM UMA COLUNA  
-- DEFAULT - FORÇA UM VALOR PADRÃO QUANDO NENHUM VALOR É PASSADO 

--

CREATE TABLE Canal(
CanalID int Primary Key,
Nome varchar(150) not null,
ContagemInscritos int default 0,
DataCriacao datetime not null

);

select *
from Canal	

--

CREATE TABLE Video (
VideoId INT PRIMARY KEY,
Nome VARCHAR(150) NOT NULL,
Vizualizacoes INT DEFAULT 0,
Likes INT DEFAULT 0, 
Dislikes INT DEFAULT 0, 
Duracao INT NOT NULL,
CanalId INT FOREIGN KEY REFERENCES Canal(CanalID)


);

select *
from Video