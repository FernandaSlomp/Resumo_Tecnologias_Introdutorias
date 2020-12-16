//FAIXA DE PREÇO 
//CIRAR ARRAY DE OBJETOS DE FAIXA DE PREÇO PARA QUE POSSA SER USADA EM UM SITE 
//TOOLTIP MSG QUE APARECE QUANDO COLOCA O MOUSE POR CIMA 
let faixas = [
	{tooltipe: 'Até 700 reais', minimo: 0, maximo: 700},
	{tooltipe: 'De 700 a 1000', minimo: 700, maximo: 1000},
	{toooltipe: 'de 1000 ou mais', minimo: 1000, maximo: 1000000}
];

//SEGUNDA OPÇAO

function craFaixaPreco(tooltip,minimo,maximo){
	return{
		tooltip,
		minimo,
		maximo
	}
};

let faixar2 = [
	craFaixaPreco('a', 0, 700),
	craFaixaPreco('b', 700, 1000),
	craFaixaPreco('c', 1000, 1000000),
	
];

console.log(faixar2);
console.log(faixas);

//TERCEIRA OPCAO constructor function

function FaixaPreco(tooltip,minimo,maximo){
	this.tooltip = tooltip,
	this.minimo = minimo,
	this.maximo = maximo
};

let constuindo = [
	new FaixaPreco('a', 0, 700),
	new FaixaPreco('b', 700, 1000),
	new FaixaPreco('c', 1000, 1000000)
];

console.log(constuindo);