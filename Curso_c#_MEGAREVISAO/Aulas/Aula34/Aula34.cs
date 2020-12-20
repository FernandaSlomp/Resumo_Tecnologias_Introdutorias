using System;

//HERANÇA


class Veiculo{ //class base

public int rodas;

public int velMax;

private bool ligado;

public void ligar(){
	ligado=true;
}

public void desligar(){
	ligado=false;
}

public string getLigado(){
	if (ligado){
		return "sim";
	}else{
		return "não";
	}
}

}


class Carro:Veiculo{ //aqui ele herda a classe base - todos os items pq estão public
//classe derivada 

public string nome;
public string cor;

public Carro(string nome, string cor){
	desligar();
	rodas=4;
	velMax=120;
	this.nome=nome;
	this.cor=cor;


}

} 



class Aula34{

	static void Main(){
		
		Carro c1=new Carro("veloz", "azul"); //criou um carro da classe carro chamado c1

		Console.WriteLine(c1.cor);
		Console.WriteLine(c1.nome);
		Console.WriteLine(c1.rodas);
		Console.WriteLine(c1.velMax);

		Console.WriteLine(c1.getLigado());
		
		
		


		
	}


};