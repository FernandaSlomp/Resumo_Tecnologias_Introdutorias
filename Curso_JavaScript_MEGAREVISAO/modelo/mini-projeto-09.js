// CRIAR FUNÇÃO QUE EXIBE A QUANTIDADE DE * QUE A LINHA POSSUI

exibirAsteriscos(14);

function exibirAsteriscos(linhas){
	// let asterisco = '';
	// for (let i = 1; i < linhas; i++){
	// 	asterisco += '*';
	// 	console.log(asterisco);
	// };

	for (let linha = 1; linha <= linhas; linha++){
		let padrao = '';
		for (let i = 0; i < linha; i++ ){
			padrao += '*';
		};
		console.log(padrao);
	};
};