using System;
//do - while - ///garanto que a pelo menos uma ação irá acontecer
class Aula21{

	static void Main(){

		// primeiro teste 
		// int num=5;

		// do{
		// 	Console.WriteLine("teste");
		// }while(num<5);


		string senha="123";
		string senhauser;

		int tentativa=0;


		do{
			Console.Clear();
			Console.WriteLine("Digite a senha");
			senhauser=Console.ReadLine();
			tentativa++;
		}while(senha != senhauser);

		Console.WriteLine("Senha correta tentativas: {0}", tentativa);



		
	}


};