//CONSTRUTOR FUNCTION
//CRIAR UM OBJETO POSTAGEM  USANDO CONSTRUCTOR
//INICIAR COM LETRA MAIUSCULA

function ConstruindoPostagem(titulo,mensagem,autor,vizualizacoes,comentarios,estaaovivo){
		this.titulo = titulo,
		this.mensagem = mensagem,
		this.autor = autor,
		this.vizualizacoes = vizualizacoes,
		this.comentarios = [],
		this.estaaovivo = estaaovivo
	
}

let postagem = new ConstruindoPostagem('oi','oi','oi','oi');
console.log(postagem);