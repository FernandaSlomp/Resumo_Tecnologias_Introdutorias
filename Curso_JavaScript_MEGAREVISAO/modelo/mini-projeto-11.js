//OBJETO ENDEREÇO

//CRIAR UM OBJETO QUE CONTEM: 
//RUA CIDADE CEP EXIBIRENTEDEÇO(ENDERECO)

let endereco = {
	Rua: 'FLORES',
	Cidade: 'CXS',
	Cep: 236789,
}

function exibirEndereco(endereco){
	for (let chave in endereco){
		console.log(chave, endereco[chave])
	}
};

exibirEndereco(endereco);