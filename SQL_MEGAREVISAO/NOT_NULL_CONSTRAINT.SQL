-- NOT  NULL CONSTRAINT 
-- SERVE PARA CRIAR RESTRICOES QUE FORÇAM INSERIR DADOS NA TABELA, NÃO SENDO POSSIVEL CRIAR A TABELA SEM INSERIR DADOS NA COLUNA MARCADA COM NOT NULL

CREATE TABLE CarteiraMotorista (
	id int not null, 
	nome varchar(255,
	idade int check (idade >=18)

);

CREATE TABLE CarteiraMotorista2 (
	id int not null, 
	nome varchar(255),
	idade int check (idade >=18)

);

select * from CarteiraMotorista2

insert into CarteiraMotorista2(id, nome, idade) values (1,'fernanda', 18)