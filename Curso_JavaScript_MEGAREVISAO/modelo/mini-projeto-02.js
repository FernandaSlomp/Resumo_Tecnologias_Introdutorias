// ESCREVA UMA FUNÇÃO QUE USA 2 NUMEROS E REOTRNA O MAIOR ENTRE ELES. 
// let a = 200;
// let b = 30;

function retornarOMaior(a,b){
	if (a > b){
		console.log(a);
	}else {
		console.log(b);
	};
}

retornarOMaior(10,10);

//VERSAO PROF
 let valorMaior = max(10,29);
 console.log(valorMaior);

 function max(numero1, numero2){
	 if (numero1 > numero2)
		 return numero1;
	return numero2;
	
	//return numero1 > numero2 ? numero1 : numero2;
 }