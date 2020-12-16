//CRIAR FUNÇÃO SOMAR QUE RETORNA A SOMA
// TODOS OS MULTIPLOS DE 3 E 5 

somar(10);

function somar(limite){
	let multiplosDe3 = 0;
	let multiplosDe5 = 0;
	for (let i = 1; i <= limite; i++){
		if ( i % 3 === 0){
			multiplosDe3 += i;
		}
		if ( i % 5 === 0) {
			multiplosDe5 += i;
		};
	};
	console.log(multiplosDe5 + multiplosDe3);


	
}
