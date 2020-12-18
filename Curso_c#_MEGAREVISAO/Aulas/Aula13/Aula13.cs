using System;

class Aula12{

	static void Main(){

		// int nota=70;
		// string resultado="reprovado";


		// if (nota >= 60){
		// 	resultado="Aprovado";
		// }

		// Console.WriteLine("Resultado: {0}", resultado);


		//leitura valor teclado:

		int n1,n2,res;
		n1=n2=res=0;

		Console.Write("Digite a primeira nota: ");
		n1=int.Parse(Console.ReadLine());

		Console.Write("Digite a primeira nota: ");
		n2=int.Parse(Console.ReadLine());



		string resultado;

		res = n1 + n2;

		if (res <40){
			resultado="Reprovado";
		}else if(res <60){
			resultado="Recuperação";

		}else{
			resultado="Aprovado";
		}

		Console.WriteLine("Resultado: {0}, nota: {1}", resultado,res);
	}


};