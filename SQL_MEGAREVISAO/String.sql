select CONCAT(FirstName,' ',LastName)
from person.Person

select upper(FirstName), lower(FirstName), len(FirstName), substring(FirstName,1,3), replace(coluna, '-', '#')
from person.Person
