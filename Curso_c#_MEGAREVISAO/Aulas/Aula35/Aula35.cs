using System;

//CADEIA DE HERANÇA E CONSTRUTORES 


class Veiculo{ //class base

private int rodas;

public int velMax;


public Veiculo(int rodas){
	this.rodas=rodas;
}

private bool ligado;

public void ligar(){
	ligado=true;
}

public void desligar(){
	ligado=false;
}

public string getLigado(){
	return (ligado?"sim":"não"); //operador ternario

	// if (ligado){
	// 	return "sim";
	// }else{
	// 	return "não";
	// }
}

public int getRodas(){
	return rodas;
}

public void setRodas(int rodas){
	if(rodas <0){
		this.rodas=0;
	}else if (rodas > 20){
		this.rodas=20;
	}else{
		this.rodas=rodas;
	}
}

}



class Carro:Veiculo{ //aqui ele herda a classe base - todos os items pq estão public
//classe derivada 

public string nome;
public string cor;

public Carro(string nome, string cor):base(4){ //base para que o construtor la em cima pegue o número de rodas 
	desligar();
	// rodas=4;
	velMax=120;
	this.nome=nome;
	this.cor=cor;


}

} 

class CarroCombate:Carro{//herdando do herdado
	public int monicao;
	public CarroCombate():base("carro de combate" ,"verde"){
		monicao=100;
		setRodas(6);

	}

}



class Aula35{

	static void Main(){
		
		Carro c1=new Carro("veloz", "azul"); //criou um carro da classe carro chamado c1

		CarroCombate cc1=new CarroCombate();

		c1.ligar();

		Console.WriteLine(c1.cor);
		Console.WriteLine(c1.nome);
		Console.WriteLine(c1.getRodas());
		Console.WriteLine(c1.velMax);

		Console.WriteLine(c1.getLigado());

		Console.WriteLine("---------------");


		Console.WriteLine(cc1.cor);
		Console.WriteLine(cc1.nome);
		Console.WriteLine(cc1.getRodas());
		Console.WriteLine(cc1.velMax);

		Console.WriteLine(cc1.getLigado());
		Console.WriteLine(cc1.monicao);

	
		


		
	}


};