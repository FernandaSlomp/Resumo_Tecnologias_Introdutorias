-- Unique Constraint

-- pode existir várias colunas com restricao unique, não permite valores repetidos 

CREATE TABLE CarteiraMotorista2 (
	id int not null, 
	nome varchar(255),
	idade int check (idade >=18),
	codigoCNH int not null UNIQUE

);

