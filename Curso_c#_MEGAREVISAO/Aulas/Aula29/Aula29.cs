using System;
//METODO construtores e destrutores
//metodo que vai inicializar o objeto quando instanciado na classe
//inicializar as propriedades/variaveis
//toda classe tem um construtor - se nào declara é default

//REGRA - UM METODO COM MESMO NOME DA CLASSE É O CONSTRUTOR

public class Jogador{ 
	public int energia;
	public bool vivo;
	public string nome; //escopo global

	public Jogador(string n){ //metodo construtor //escopo local
		energia=100;
		vivo=true;
		nome=n;

	}
	~Jogador(){ //metodo destrutor
		Console.WriteLine("Jogador {0} removido", nome);


	}
}

class Aula29{

	static void Main(){ 

		string nomeEscreva;
		Console.WriteLine("Digite o nome do jogador 1");
		nomeEscreva=Console.ReadLine();

		Jogador j1=new Jogador(nomeEscreva);
		Jogador j2=new Jogador("Maria");
		

		j1.energia= 50;

		Console.WriteLine("Energia do jogador 1 : {0}",  j1.nome);

		Console.WriteLine("Energia do jogador 2 : {0}",j2.nome );
		

		
	}


};