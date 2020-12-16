const nome1 = document.getElementById('nome').value;
const convidou1 = document.getElementById('convidou');
console.log(nome1);

function verificaEntrada(){
	const nome1 = document.getElementById('nome').value;
	const convidou1 = document.getElementById('convidou');
	const convidadosCoco = ['fer', 'jose', 'maria'];
	if (convidadosCoco.includes(nome1)){
		document.getElementById('permissaoEntrada').innerText = 'vc pode entrar'
	} else {
		document.getElementById('permissaoEntrada').innerText = 'vc nao pode entrar'
	}
};