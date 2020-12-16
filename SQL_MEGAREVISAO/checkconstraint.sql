-- CHECK CONSTRAINT -- RESTRICOES SOBRE VALORES 

CREATE TABLE CarteiraMotorista (
	id int not null, 
	nome varchar(255) not null,
	idade int check (idade >= 18)
)

select * from CarteiraMotorista

insert into CarteiraMotorista(id, nome, idade) values (1, 'fernanda', 18)

