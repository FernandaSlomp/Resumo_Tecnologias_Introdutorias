using System;

class Aula15{

	static void Main(){

		int tempo=0;
		char escolha=' ';


		Console.WriteLine("bh a vitória");
		Console.WriteLine("Escolha o transporte: A=avião; c=carro; o=onibus");

		escolha=char.Parse(Console.ReadLine());

		switch(escolha){
			case 'a':
			case 'A':
				tempo=50;
				break;
			case 'c':
				tempo=100;
				break;
			case 'o':
				tempo=140;
				break;
			default:
				tempo=-1;
				break;

		}

		if (tempo<0){
			Console.WriteLine("Transporte inválido!");
		}else{
			Console.WriteLine("Tempo para o transporte escolhido é {0}", tempo);
		}
		

		
	}


};