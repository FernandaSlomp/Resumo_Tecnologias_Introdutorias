//RECEBER UMA QUANTIDADE DE VALORES PARA AVALIAR 
//FUNÇÃO EXIBE SE CADA VALOR É PAR OU IMPAR

exibirTipo(5);

function exibirTipo(limite){
	for (let i = 0; i <= limite; i++)
		if ( i % 2 === 0){
			console.log(i, 'par');
		}
		else{
			console.log(i, 'impar');
		}
}