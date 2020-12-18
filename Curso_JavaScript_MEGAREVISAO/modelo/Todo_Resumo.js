// //AULA TIPOS PRIMITIVOS! ---------------------------------------------------------
// let nome = 'Rafael'; //string
// let idade = 3.0; //number literal
// let estaAprovado = true; //boolean
// let sobrenome; //Undefined
// let corSelecionada = null;// Redefinir um valor  

// // TIPAGEM DINÂMICA -------------------------------------------------------------
// // TYPEOF NOME -- DIZ O TIPO DA VARIÁVEL

// //OBJETOS PASSAR PARA DENTRO PARA CRIAR UMA CLASSE ------------------------------
// //PRIMEIRO A PROPRIEDADE: E OQ VAI DENTRO DA PROPRIEDADE
// //KEY : VALUE - PAIR
// let pessoa = { 
// 	nome: 'Rafael',
// 	idade: 25,
// 	estaAprovado: true,
// 	sobrenome: 'de souza '
// };

// console.log(pessoa);

// let animaisDaPaula = {
// 	tartaruga: 'Bernando', 
// 	idadeT: 1,
// 	Piriquito: 'Mariana', 
// 	IdadeP: 2,
// 	Dog: 'Emmy',
// 	IdadeD: 4,
// 	simNao: true,
// }

// // CONSOLE.LOG(ANIMAISDAPAULA.DOG)

// //ARRAYS ---------------------------------------------------------------------

// let familia = ['Fernanda', 'Paula', 20, 29]
// console.log(familia.length);
// console.log(familia[3]);

// let morzi = ['Paula', 'RJ', 29];
// console.log(morzi[0]); 

// //FUNCTIONS --------------------------------------------------------------------
// //VERBO ++ SUBSTANTIVO

// let corSite = "azul";
// function resetaCor(cor,tonalidade){
// 	corSite = cor + "" + tonalidade; //+ junta valores 
// };

// console.log(corSite);
// resetaCor("vermelho", "claro");
// console.log(corSite);


// let nomeGato = "Roger";
// function criarFuncao(primeiro, segundo){
// 	nomeGato = primeiro + " " + segundo;
// };
// console.log(nomeGato)
// criarFuncao("Matheus", "Smith");
// console.log(`O nome do gato é: ${nomeGato}` )

// //TIPOS DE FUNÇOES - 2 ---------------------------------------------------------
// //1* REALIZA UMA TAREFA E NAO DEVOLVE NADA

// function dizerNome(){
// 	console.log('oi');
// }
// dizerNome();

// //2* RETURN

// function multiplicarPorDois(valor){
// 	return valor*2;
// }
// console.log(multiplicarPorDois(5));
// let resultado = multiplicarPorDois(5);
// console.log(resultado);

// //OPERADORES --------------------------------------------------------------------
// //AJUDAM CRIAR EXPRESSOES, LOGICA
// //OPERADORES ARITIMÉTICOS(MATEMAMÁTICOS)
// // OPERADORES ATRIBUIÇAO
// //OPERADORES DE COMPARAÇÃO
// //OPERADORES LÓGICOS
// //OPERADORES BITWISE

// //OPERADORES ARITIMÉTICOS: ------------------------------------------------------
// //+ - * / ** 
// let salario = 100;

// console.log(salario + salario);

// let idade2 = 18;

// // ++ -- 

// console.log(idade2++);
// console.log(idade2);

// // OPERADORES DE ATRIBUIÇÃO ---------------------------------------------------
// let valorTeclado = 100;
// //valorTeclado = valorTeclado + valorTeclado;
// valorTeclado += valorTeclado;
// console.log(valorTeclado);

// // OPERADORES DE IGUALDADE ----------------------------------------------------
// // IGUALDADE RESTRITA ===
// console .log (1 === 1);
// console.log('1' === 1);

// //IGUALDADE SOLTA ==
// console.log(1 == 1);
// console.log('1' == 1);

// //OPERADOR TERNÁRIO -------------------------------------------------------------
// //TEM UM CLIENTE, 100 PREMIUM, COMMUM
// let pontos = 100;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);

// //OPERADORES LÓGICOS  - E (&&) -------------------------------------------------
// //RETORNA TRUE SE OS DOIS OPERANDO FOR TRUE 
// // CONSOLE.LOG(TRUE && TRUE);
// let maiorIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

// //OPERADOR LÓGICO - OU (||) -------------------------------------------------
// //RETORNA TRUE SE UM DOS DOIS OPERANDOS FOREM TRUE 
// let maiorIdade2 = true;
// let possuiCarteiraDeTrabalho2 = true;
// let podeAplicar2 = maiorIdade2 || possuiCarteiraDeTrabalho2;
// console.log('pode aplicar: ',podeAplicar2);

// //OPERADOR LÓGICO - NOT (!) 
// let candidatoRecusado = !podeAplicar2;
// console.log('recusado? ',candidatoRecusado);

// //OPERADORES NÃO BOOLEANOS ---------------------------------------------------
// //FALSY
// //UNDEFINED
// //NULL
// ///0
// //FALSE
// //""
// //NAN - NOT A NUMBER

// //TRUTHY - RETORNA SE NAO FOR NENHUM DOS OUTROS ACIMA 

// let corPersonalizada = 'red';
// let corPadrao = 'blue';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil); //EXIBE O PRIMEIRO DA COMPARAÇÃO

// //TIPOS DE CONDICIONAIS --------------------------------------------------------

// //IF... ELSE -----------------------------------------------------------------

// //SE A HORA ESTIVER ENTRE 06:00 ATÉ 12:00 : BOM DIA!
// //SE ESTIVER ENTRE 12:00 ATÉ 18:00 : BOA TARDE!
// // CASO CONTRÁRIO : BOA NOITE!

// // if (condição) {
// // 	//codigo a ser executado
// // }
// // else if (outracondição) {
// // 	//codigo a ser executado 
// // }
// // else { //caso nenhuma condição acima funcione 
// // 	//codigo a ser executado
// // }

// let hora = 22;

// if (hora > 06 && hora < 12 ) {
// 	console.log('BOM DIA!')
// }
// else if (hora > 12 && hora < 18){
// 	console.log('BOA TARDE!')
// }
// else{
// 	console.log('BOA NOITE!')
// }

// //SWITCH... CASE --------------------------------------------------------------
// let permissao; //cumum, gerente, diretor
// permissao = 'comum';

// switch (permissao) {
// 	case 'comum':
// 	console.log('usuario comum');
// 	break
// 	case 'gerente':
// 	console.log('gerente');
// 	break
// 	case 'diretor':
// 	console.log('gerente');
// 	break

// 	default: //caso não cai em nenhuma dessas condicoes 
// 	console.log('usuario não reconhecido')
// }

// //1.LOOP - FOR ------------------------------------------------------------------
// for (let i = 0; i < 5; i++){
// 	if ( i % 2 !== 0){ //MODULOS
// 		console.log(i, 'Impar')
// 	}
// };

// //2.LOOP - WHILE ----------------------------------------------------------------
// let i2 = 0;
// while (i2 < 5 ){
// 	if ( i2 % 2 !== 0){ //MODULOS
// 		console.log(i2, 'Impar')
// 	}
// 	i2++;
// }

// //3.LOOP -  DO... WHILE --USA POUCO ----------------------------------------------
// let i3 = 0;
// do{ // EXECUTA PRIMEIRO 1 VEZ E DPS VERIFICA - NO MINIMO UMA ELE RODA
// 	console.log('digitando...', i3);
// 	i3++; //MTO IMPORTANTE SE NAO BUGA
// } while (i3 < 10); //VERIFICA PRIMEIRO E EXECUTA DPS 

// //4.LOOP -  FOR... IN - FUNCIONA PARA ITERAR OU NO ARRAY ----------------------

// const pessoa2 = {
// 	nome: 'cacau',
// 	idade: 23
// };

// //key-value 

// for (let chave in pessoa2){
// 	console.log(chave,pessoa.nome); //QUANDO SABE O NOME DA VARIAVEL ACESSAR PELO PONTO(.NOME), QUANDO NÃO SABE ACESSAR POR ['nome']
// }

// const cores = ['red', 'blue', 'yellow', 'green'];
// for (let indice in cores){
// 	console.log(indice,cores[indice]);
// }

// //5.LOOP - FOR... OF ------------------------------------------------------------
// //CASO PRECISE INTERAR SOBRE OS ITEMS DE UM ARRAY, BASTA USAR O LOOP FOR OF 
// for(let cor of cores){
// 	console.log(cor);
// }

// //FIZZBUZZ  -------------------------------------------------------------------
// //COMPARA VALORES E RETORNA BASEADO NO TIPO DE ENTRADA
// //DIVISIVEL POR 3 => FIZZ
// //DIVISIVEL POR 5 => BUZZ
// //DIVISIVEL POR 3 E 5 => FIZZBUZZ
// //NAO DIVISIVEL POR NENHUM DELES => ENTRADA
// //SE ENTRADA NAO NUMERO => NAN - não é um número
// // const resultado2 = fizzBuzz(3);
// // console.log(resultado2);


// //- FUNCOES - FACTORY FUNCTIONS FUNCOES DE FÁBRICA -----------------------------
// //PARA COLOCAR COISAS DENTRO DE UMA CONSTANTE 

// //ENCAPSULAR E RETORNAR 

// // const gato1 = {
// // 	raçaGato : 'siamez',
// // 	idade : 10,
// // 	tamanhoGato : {
// // 		altura : 10,
// // 		largura : 2
// // 	},
// // 	comer(){
// // 		console.log('dando comida pro gatinho!')
// // 	} 

// // }
// //camelCase umDoisTresQuatro
// function addGatoNew(racaGato, idade, tamanhoGato) {
// 	return {
// 		racaGato,
// 		idade,
// 		tamanhoGato,
// 		comer(){
// 			console.log('dando comida pro gatinho!')
// 		}
// 	}
// }

// const gato2 = addGatoNew('bolado', 2, 30);
// console.log(gato2);


// //FUNCAO CONSTRUCTOR  -----------------------------------------------------------
// //PASCAL CASE - UmDoisTresQuatro
// //USA O THIS PARA REFERENCIAL O ABJ ATUAL QUE ESTA MANIPULANDO
// function Gato(racaGato,idade,tamanhoGato) {
// 	this.racaGato = racaGato,
// 	this.idade = idade,
// 	this.tamanhoGato = tamanhoGato,
// 	this.comer = function() {
// 		console.log('dando comidinha');
// 	}
// }

// const novogato = new Gato('bolinha', 4, 30);
// console.log(novogato);

// //DIFERENÇA UM FAZ A CRIAÇAO ATRAVEZ DO ''NEW'' 
// //FAZ A CRIAÇAO DENTRO DA PROPRIA FUNÇÃO 


// //NATUREZA DINÂMICA DE OBJETOS -----------------------------------------------

// const mouse = {
// 	cor: 'red',
// 	marca: 'ococ'
// }
// mouse.velocidade = 5000; //ADICIONA OUTRA PROPRIEDADE
// mouse.trocarDPI = function() { //ADICIONA UMA PROPRIEDADE
// 	console.log('mudando Vel'); 
// };

// delete mouse.velocidade; //DELETA 
// delete mouse.trocarDPI;

// console.log(mouse);


// // EXERCICIO OUTRO PROF.  -----------------------------------------------------
// //INVERTER ARRAY
// let array4 = [1,2,3,4,5]

// function reverseArray(array){
// 	let ponteiroMenor = 0
// 	let ponteiroMaior = array.length - 1
// 	while (ponteiroMenor < ponteiroMaior){
// 		//swap 
// 		let tmp = array[ponteiroMenor]
// 		array[ponteiroMenor] = array[ponteiroMaior]
// 		array[ponteiroMaior] = tmp

// 		ponteiroMenor++ //vai andar pra frente 
// 		ponteiroMaior-- //vai andar pra tras 
// 	}	
// 	return array
// }

// console.log(reverseArray(array4));

// //


// //CLONANDO OBJETOS --------------------------------------------------------------

// const gato1 = {
// 	raçaGato : 'siamez',
// 	idade : 10,
// 	tamanhoGato : {
// 		altura : 10,
// 		largura : 2
// 	},
// 	comer: function(){
// 		console.log('dando comida pro gatinho!');
// 	}
// };
// //{} PERIMEIRO PARAMETRO É O ALVO,
// //E ONDE ELE VAI COPIAR AS PROP METODOS 
// const novoObjeto = Object.assign({
// 	dono: 'Fernanda'
// },gato1 );
// console.log(novoObjeto);	

// const objeto2 = {...gato1}; //SPREAD
// console.log(objeto2);

// //APRENDENDO A FUNÇÃO MATH  -----------------------------------------------
// // Math.random();
// // Math.max(3,4,5) Math.min(3,4,5) //MAIOR E MENOR VALOR


// // STRING ------------------------------------------------------------------------
// // TIPO PRIMITIVO
// const msg = 'primeira msg';

// //TIPO OBJETO REFERENCIA
// const outraMsg = new String ('new String');
// //.length 
// //outraMsg[2] => w //ACESSAR O INDICE INFO DENTRO DE STRING
// //msg.includes{'primeira'} => true ... tem a msg dentro
// //msg.startWith('primeira') // msg.endWith('msg')=> true .... inicia com/ finaliza com 
// //msg.indexOf('primeira') => 0 //DIZ ONDE TA O INDEX
// //msg.replace('primeira', 'segunda')
// //msg.trim() => tira espaços exedentes 
// //msg.split(' ') => quebra a msg em 2 pedaços 


// //TEMPLATE LITERAL -------------------------------------------------------------
// const msg5 = 'Oi está é a minha\n' + 
// '\'primeira\' msg'; //SCAPE SEQUENCES

// //OBJECT{}
// //BOLLEAN TRUE , FALSE
// //STRING "", ''
// //TEMPLATE `` //MANTEM FORMATAÇÃO

// const outra3 = `Oi ${msg5} é a minha msg! 
// 'aspas'`;


// //DATE -------------------------------------------------------------------------
// const data1 = new Date();
// const data2 = new Date('March 05 2020 09:50');
// const data3 = new Date(2020,02,05,9,50);

// data3.setFullYear(2040); //ALTERAR INFO
// data3.toDateString() //=> CONVERTE PRA STRING 
// data3.toTimeString() //
// data3.toISOString() //=> COMO É VISTO PELO SERVIDOR 



// // INTRO AOS ARRAYS //USA MTO -------------------------------------------------


// //ADICIONANDO ELEMENTOS A UM ARRAY -----------------------------------------------------
// const numeros2 = [1,2,3]

// //INICIO 
// numeros2.unshift(0);
// console.log(numeros2);

// //MEIO 
// numeros2.splice(1,0,'a' ); //PRIMEIRO PARAMETRO É QUAL O INDICE, SEGUNDO SE QUER DELETAR, TERCEIRO  OQ QUE INSERIR 
// console.log(numeros2);

// //FINAL 
// numeros2.push(5);
// console.log(numeros2);


// //ENCONTRANDO ELEMENTEOS (PRIMITIVOS) ----------------------------------------
// let numeros4 = [1,2,3,1,4];
// console.log(numeros4.indexOf(4)); //SE NAO TEM RETORNA O -1 
// console.log(numeros4.lastIndexOf(1));  //ULTIRMA OCORRENCIA DO 1
// console.log(numeros4.indexOf(2)  !== -1); //SABER SE ELE ESTA DENTRO 
// numeros4.includes(2); ///MAIS SIMPLES PARA SABER SE TA DENTRO OU NÃO 


// //ENCONTRANDO ELEMENTOS (REFERÊNCIA) -------------------------------------
// //USAR O METODO FIND()
// const marcas = [
// 	{id: 1, nome: 'a'},
// 	{id: 1, nome: 'a'},
// 	{id: 1, nome: 'a'},
// 	{id: 1, nome: 'a'},
// ];

// const marca = marcas.find(function(marca){
// 	return marca.nome === 'a';
// })

// console.log(marca);


// //ARROW FUNCTIONS => PODE REMOVER A FUNCTION E COLOCAR A SETA . NO CASO ONDE TEM 1 PARAMETRO ---------------------------------------------------------------------
// const marcas2 = [
// 	{id: 1, nome: 'a'},
// 	{id: 2, nome: 'b'},
// 	{id: 3, nome: 'c'},
// 	{id: 4, nome: 'd'},
// ];

// console.log(marcas2.find((marca2) => marca2.nome === 'c'));


// //REMOVENDO ELEMENTOS ----------------------------------------------------------
// const numero5 = [1,2,3,4,5,6];
//FINAL
// const ultimo = numero5.pop();
// console.log(ultimo);
// console.log(numero5);

// //INICIO
// const inicio = numero5.shift();
// console.log(inicio);
// console.log(numero5);

// //MEIO 
// const meio = numero5.splice(2, 1); //1 - QUAL O INDICE, 2- NUMERO DE ELEMENTICIONANDO 
// console.log(meio);
// console.log(numero5);


// //ESVAZIANDO UM ARRAY -----------------------------------------------------------
// let numeros6 = [1,2,3,4,5,6];
// // //1 //SE TEM MAIS DE UMA REFERENCIA SO APAGA A REFERENCIA INICIAL
// // numeros6 = [];
// // console.log(numeros6);

// // //2 //APAGA TODAS REFERENCIAS DESSE ARRAY //BEST METODO
// // numeros6.length = 0;
// // console.log(numeros6);

// //3 
// // numeros6.splice(0, numeros6.length)
// // console.log(numeros6);

// //4 
// // while (numeros6.length >10 )
// // 	numeros6.pop();
// // console.log(numeros6);


// //COMBINANDO E CORTANDO ARRAYS -------------------------------------------------
const primeiro2 = [1,2,3];
const segundo2 = [4,5,6];
// // COMBINAR
const combinado = primeiro2.concat(segundo2);
console.log(combinado);
//DIVIVDIR 
const dividindo = combinado.slice(1, 3); //COMECA E TERMINA ULTIMO -1 SE PASSAR SO UM VALOR ELE VAI ATE O FINAL// SEM PARAMETROS = COPIA TODOS OS VALORES PRA UMA VARIAVEL QUE QUISER. 
console.log(dividindo);


// //OPERADOR SPREAD --------------------------------------------------------------

// //NOVA FORMA DAS ACIMA PARA CLONAR 
// //PERCORRE ARRAY E VAI ADICIONANDO 1 POR 1 
// const combinando2 = [...primeiro2,'a',...segundo2];
// console.log(combinando2);

// //CLONADO
// const clonado = [...combinando2];
// console.log(clonado);


// //ITERANDO UM ARRAY ------------------------------------------------------
// const numeros7 = [1,2,3,4,5,6,7];

// //FOR OF
// for (numero7 of numeros7 ){
// 	console.log(numero7)
// };

// //FOREACH
// numeros7.forEach(function(numero7){
// 	console.log(numero7);
// })


// //FOREACH COM ARRAY
// numeros7.forEach((numero7, indice) => console.log(numero7, indice));

// //COMBINANDO ARRAY -------------------------------------------------------

// const numeros8 = [1,2,3,4,5,6,7];
// const pontosArray = numeros8.join('.');
// console.log(pontosArray);

// const frase8 = 'Ola bem vindo ao curso';
// const resultado8 = frase8.split(' ');
// console.log(resultado8);

// console.log(resultado8.join('-'));

//IMPUTS USUARIO ----------------------------------------------------------
// let corFav = prompt('Qual sua cor favorita?');
// console.log(corFav);

// document.getElementById('id').innerText = 'colocar oq eu quiser la';
//SELECIONEI O CAMPO Q EU QUERO, ACHEI O ID E DECIDI OQ EU QUERIA FAZER

//PELO CLASS EM LISTAS
// document.getElementsByClassName('class')[0].innerText = 'oq quiser';


//PARA SOMAR ITENS DENTRO DE UM ARRAY -------------------------------------------------------------------------------------------------------
// let numeros7 = [1,2,7];

// const total = numeros7.reduce(function(total,elemento){
// 		return(total + elemento)
// })

// const total2 = numeros7.reduce((total,elemento) => total + elemento)

// console.log(total);
// console.log(total2);

///
// PARA ADICIONAR UM STRING TANTAS VEZES NECESSARIAS UTILIZAR = REPEAT --------------------------------------------------
// function staircase(n) {
//     for (let linha = 1; linha <= n; linha++){
//         let numeroDaL = (n - linha)
// 		console.log(' '.repeat(numeroDaL) + `#`.repeat(linha) )
// 	}
// }
//

// Spread com math.max == saber o maior ou .min menor valor de um array ....................................
// var arr = [1, 2, 3];
// var max = Math.max(...arr);
// // max: 3


//EVERY - para olhar cada um dos ele do array ------------------------------------------------------------------------------
//
// function cadaN(num){
// 	return (4 % num) == 0
// }
// console.log(a.every(cadaN))

// a.every(num => (4 % num) == 0)

// console.log(a.every(cadaN))

// let numeros = 0;
//     for (let i = 1; i <= 100; i++ ){
//         if (a.every(num => i % num == 0))
//             if (b.every(num => num % i == 0)) 
//                 numeros++;
//     }
//     return numeros

    // let validCount = 0;
	//IMPORTANTE O <= 100
	

// PEGAR O ULTIMO INDICE DE UM ARRAY -------------------------------------------------------------------------------------
//PRIMEIRO JEITO 
// var array = [1, 2, 3, 4, 5];
// var ultimo = array[array.length - 1];
// 
//sSEGUNDO JEITO ===
//a = [1, 2, 3]
// document.write(a.slice(-1)[0])