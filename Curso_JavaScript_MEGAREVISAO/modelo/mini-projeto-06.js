//CRIAR UM MÉTODO PARA LER PROPRIEDADE DE UM OBJETO
//EXIBIR SOMENTE AS PROPRIEDADES DO TIPO STRING QUE ESTÃO NESSE OBJETO. 

const filme = {
	título : 'Vingadores',
	ano : 2018,
	diretor: 'xxxx',
	personagem : 'Thor'
}


exibirPropriedades(filme);

function exibirPropriedades(objeto){
	for (prop in objeto){
		if (typeof objeto[prop] === 'string'){
			console.log(prop,objeto[prop])
		}
	}
};