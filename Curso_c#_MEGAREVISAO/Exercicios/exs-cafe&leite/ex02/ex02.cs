using System;
//Crie um algoritmo que verifique se um número informado é par ou impar
class ex02{

	static void Main(){

		int n=0;

		Console.WriteLine("Informe o número: ");
		n=Convert.ToInt16(Console.ReadLine());

		if(n % 2 == 0){
			Console.WriteLine("É par");
		}else{
			Console.WriteLine("É impar");
		}

		
	}


};