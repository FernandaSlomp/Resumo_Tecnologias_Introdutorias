using System;

//SOBRECARGA DE CONSTRUTORES - PODE CRIAR VARIAS CONSTRUTORES PARA UMA MESMA CLASSE - DIFERENÇÃ É O NÚMERO DE PARAMS - ARGUMENTOS DE ENTRADA. 


public class Jogador{ 
	public int energia;
	public bool vivo;
	public string nome; 


	public Jogador(){
		energia=100;
		vivo=true;
		nome="nome escolhido";

	}
	public Jogador(string n){
		energia=100;
		vivo=true;
		nome=n;

	}

	public Jogador(string n, int e){
		energia=e;
		vivo=true;
		nome=n;

	}

	public Jogador(string n, int e, bool v){
			energia=e;
			vivo=v;
			nome=n;

	}	


	public void info(){
		Console.WriteLine("{0} {1} {2} ", nome, energia, vivo);

	}	



}

class Aula29{

	static void Main(){ 

		Jogador j1=new Jogador();
		Jogador j2=new Jogador("Maria");
		Jogador j3=new Jogador("Maria2", 104);
		Jogador j4=new Jogador("Maria3", 0, false);

		Console.WriteLine("Energia do jogador 1 : {0}",  j1.nome);

		Console.WriteLine("Energia do jogador 2 : {0}",j2.nome );
		
		j1.info();
		j2.info();
		j3.info();
		j4.info();

		
	}


};