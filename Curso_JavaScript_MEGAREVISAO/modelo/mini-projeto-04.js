//VELOCIDADE MAXIMA DE ATÉ 70KM
//A CADA 5 KM ACIMA DO LIMITE VC GANHA 1 PONTO NA CARTEIRA 
//MATH.FLOOR() - ARRENDONDAR 
//CASO OS PONTOS SEJAM MAIOR QUE 12 -> CARTEIRA SUSPENDIDA 
verificarVelocidade(130);

// function verificarVelocidade(velocidade){
// 	console.log(velocidade);
// 	let testando = velocidade;
// 	switch (testando) {
// 		case (testando <= 70):
// 		console.log('ok!');
// 		break
// 		case (testando > 70 && testando <=75):
// 		console.log('1pto');
// 		break
// 		default:
// 		'deu ruim'
// 	}
// }

function verificarVelocidade(velocidade){
	const valorVelocidadeMaxima = 70;
	const kmPorPonto = 5;
	if ( velocidade <= valorVelocidadeMaxima)
		console.log('ok');
	else {
		const pontos = ((velocidade - valorVelocidadeMaxima) / kmPorPonto); 
		if (pontos >= 12){
			console.log(`Você esta com ${Math.floor(pontos)} pontos, logo Carteira Suspença`);
		}
		else{
			console.log(`Você tem: ${Math.floor(pontos)} pontos` );
		} 
	}
}	