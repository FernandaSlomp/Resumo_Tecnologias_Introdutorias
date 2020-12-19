using System;
//THIS 
//FAZ REFERENCIA AO OBJETO PAI

//this é o de fora
//sem o this é o de dentro


class Calculos{
	public int v1=100;
	

	public int v2;

	public Calculos(int v1, int v2){
		v1=3;
		this.v2=v2;

		Console.WriteLine(this.v1); // 100
		Console.WriteLine(v1); // 3



	}

	public int Somar(){
		return v1+v2;
	}
}


class Aula32{

	static void Main(){

		Calculos c=new Calculos(10,2);

		Console.WriteLine(c.Somar()) ;

		
	}


};