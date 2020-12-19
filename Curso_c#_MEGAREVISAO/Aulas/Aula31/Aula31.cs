using System;

//CLASSE STATIC 

//- COMO SE FOSSE UM ELEMENTO GLOBAL AO PROGRMA 
//- NÃO PERMITE INSTANCIAR UM OBJETO DESSA CLASSE 
//- NÃO PERMITE USO DE CONSTRUTORES 
// TODA CLASSE STATIC TODOS MEMBROS PRECISAM SER STATIC

//UMA CLASSE NÃO STATIC PODE TER UM MEMBRO STATIC
//QUANDO CRIADO PROPRIEDADO STATIC - TODOS OS OBJETOS DA CLASSE APONTAM PRA MESMA PROPRIEDADE



static public class Jogador{ 
	static public int energia;
	static public bool vivo;
	static public string nome; 


	static public void iniciar(string n){
		energia=100;
		vivo=true;
		nome=n;

	}
	
	static public void info(){
		Console.WriteLine("{0} {1} {2} ", nome, energia, vivo);

	}	

}

class Inimigo{
	static public bool alerta;
	public string nome;

	public Inimigo(string n){
		alerta=false;
		nome=n;
	}


	public void Info(){
		Console.WriteLine(nome);
		Console.WriteLine(alerta);
	}
}

class Aula31{

	static void Main(){ 

		Jogador.iniciar("Fer");
		Jogador.info();

		Inimigo i1=new Inimigo("nome1");
		Inimigo i2=new Inimigo("nome2");
		Inimigo i3=new Inimigo("nome3");

		Inimigo.alerta=true; //como é static tudo muda - definindo em todos

		i1.Info();
		i2.Info();
		i3.Info();
		
	}


};