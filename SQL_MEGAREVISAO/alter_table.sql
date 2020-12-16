-- alterar estrutura tabela usando ALTER TABLE

-- SYNTAXE 

ALTER TABLE nomeDaTabela
ACAO

--exs 
-- add, removerm alterar uma coluna
-- setar valores padroes para uma coluna
-- add ou remover restricoes de colunas
-- renomear uma tabela 

-- adicionar coluna
ALTER TABLE youtube 
add ativo bit 

--altera restricoes 
ALTER TABLE youtube 
alter column categoria varchar(300) not null

--alteracao do nome da coluna 
EXEC sp_RENAME 'nomeTabela.nomeColunaAtual', 'nomeColunaNova', 'COLUMN'

--alteracao do  nome da tabela
EXEC sp_Rename 'youtube', 'youtube2'

--DESAFIO - CRIAR TABELA NOVA COM TRES COLUNAS -
-- ALTERAR TIPO DE UMA COLUNA
-- RENOMEAR O NOME DE UMA COLUNA
--RENOMEAR O NOME DA TABELA 

EXEC SP_RENAME 'desafio02',
'desafio03'
select * 
from desafio03