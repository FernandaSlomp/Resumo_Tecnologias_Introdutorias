//CRIAR FUNÇÃO PARA MOSTRAR OS NÚMEROS PRIMOS

// 10 ( 1 OU POR ELE MESMO)

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
	for (let numero = 2; numero <= limite; numero++){
		if (numeroPrimo(numero)) console.log(numero);
	};		
		// for (let i = 0; i < seila; i++){
		// 	console.log(inicio)
		// 	// if (inicio % i === 0 ) {

		// 	// console.log(inicio);

		// 	// };
			
		// };
	// };
	// // console.log(seila);
	// for (let i = 0; i < seila.length; i++){
		
	// 	for (let coco in seila){
	// 		// console.log(seila); //aray todo
	// 		// console.log(i);
	// 		// console.log(seila[i]);
	// 		// console.log(coco);
	// 		let qualquer = '';
	// 		if (coco % i !== 0 ) {
	// 			qualquer += coco;
	// 		};
			
	// 	};
	// 	return qualquer;
	// 	// console.log(seila); //aray todo
	// 	// console.log(i);
	// 	// console.log(seila[i]);
	// 	// console.log(i);
	// 	// if (seila[i] % i === 0 ) {
	// 	// 	// console.log(seila[i]);
	// 	// };
		
			
	// };
	
	

};

function numeroPrimo(numero){
		for (let divisor = 2; divisor < numero; divisor++){
				if (numero % divisor === 0 ) {
					return false;
				};
		};
		return true;
};

// console.log(qualquer);