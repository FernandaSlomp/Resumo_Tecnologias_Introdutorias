using System;
//Passagem por valor e por referencia 
// REF - Passagem por referencia 
// usa o endereço de memoria da variável que foi passada Como argumento - altera o valor de memoria
class Aula25{

	static void Main(){

		int num=10;
		dobrar(ref num);
		Console.WriteLine(num);

	}

	static void dobrar(ref int valor){ 
		valor*=2;

	}

	static void dobrar2(int valor){ //passagemm por valor - não usa o endereço de memoria 
		valor*=2;

	}

	


};