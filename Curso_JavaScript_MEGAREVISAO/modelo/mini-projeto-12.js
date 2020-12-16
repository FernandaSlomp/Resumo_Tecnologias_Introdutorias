// IGUALDADE DE OBJETOS

//CRIAR DUAS FUNCTIONS QUE COMPARAM OBJETOS 

function Endereco(rua,cidade,cep){
	this.rua = rua,
	this.cidade = cidade, 
	this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

const endereco3 = {
	rua : 'a',
	coco : 'c',
	cep : 23
};

function saoIguais(endereco1, endereco3){
	let saoOuNao = true;
	for (let item in endereco1) {
		for (let item2 in endereco3){
			if (item === item2 ){
				console.log(`O ${item} é igual ao ${item2}`)
			}
			else {
				console.log(`O ${item} não é igual ao ${item2}`)
			}
		}
	}
};


saoIguais(endereco1, endereco3);


//RESOLUÇÃO PROFESSOR: 

function saoIguaisprof(endereco1, endereco2){
	return endereco1.rua === endereco2.rua &&
			endereco1.cidade === endereco2.cidade &&
			endereco1.cep === endereco2.cep 
}

console.log(saoIguaisprof(endereco1, endereco2));


function temEderecoMemoriaIguais(endereco1, endereco2){
	return endereco1 === endereco2;
}

console.log(temEderecoMemoriaIguais(endereco1, endereco2));
