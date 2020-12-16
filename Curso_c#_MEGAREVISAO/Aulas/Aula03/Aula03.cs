using System;


//olhar todos os tipos na web 
//variaveis locais ao metodo MAIN
class Aula03{
	static void Main(){
		int num1=0,num2,res;
			num1 = 10;
			num2 = 2;
			res=num1 * num2;

		byte n1=10; //entre 0 e 255
		int num=-10;
		char letra='c'; //so um caracter tbm pode ser numero
		float valor=2.4f;
		string nome="Fernanda"; //mais caracteres

		var aux=10; //na compilação do programa ela vira uma variavel inteira //não é aconselhavel mudar o tipo da variavel
		var aux2=nome;

		//ler uma variavel:
		Console.WriteLine("valor da aux: " + aux);
		Console.WriteLine(aux2);
		Console.WriteLine("A multiplicação de " + num1 + " e " + num2 + " é igual a= " + res +  " sem a variavel " + num1 * num2);


	}
}