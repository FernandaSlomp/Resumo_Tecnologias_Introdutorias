using System;
//Faça um algoritmo que exiba quantas pessoas possuem mais de 18 anos. O algoritmo deverá ler a idade de 10 pessoas.
class ex03{

	static void Main(){

		int idade=0;
		int qtd=0;
		int i =0;

		while (i < 10){
			i= i+1;
			Console.WriteLine("informe a idade");
			idade = Convert.ToInt32(Console.ReadLine());
			if (idade > 18){
				qtd= qtd+1;
			}
		Console.WriteLine("Pessoas" + qtd + "maior de 18 ");
	}

	

		// int qtde = 0;
		//  int idade = 0;
		//  int i = 0;

		//  while (i < 10){
		//  	i = i + 1;
		//  	Console.Write("Informe a idade da pessoa: ");
		//  	idade = Convert.ToInt32(Console.ReadLine());
		//  	if (idade >= 18){
		//  	qtde = qtde + 1;
		//  	}
		//  
		//  }
		//  Console.WriteLine("Existem " + qtde + " pessoas com mais de 18 anos");
		//  Console.ReadKey();


	}
}