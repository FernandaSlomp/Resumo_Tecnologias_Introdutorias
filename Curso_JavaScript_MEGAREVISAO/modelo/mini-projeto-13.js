//OBJETO POSTAGEM DE BLOG
//CRIAR OBJETO DE POSTAGEM DE BLOG QUE CONTEM:

let postagem = {
	titulo: 'cooc',
	mensagem: 'mensagem',
	autor: 'autor1',
	vizualizacoes: 200,
	comentarios: [
		{autor: 'autor',mensagem: 'mensagem2'},
		{autor: 'autor',mensagem: 'mensagem2'},
		{autor: 'autor',mensagem: 'mensagem2'}
	],
	estaAoVivo: function estavivo(){
		console.log('s/n')
	}
}

console.log(postagem);