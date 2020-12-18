using System;
//Argumento Out - mais de um valor de saida
class Aula26{

	static void Main(){
		int dividen,divis,quoci,rest;
		dividen=10;
		divis=5;
		quoci=divide(dividen,divis, out rest);

		Console.WriteLine("{0}/{1}: quociente{2} e resto {3}", dividen, divis, quoci, rest);


	}

	static int divide(int dividendo, int divisor, out int resto){
		int quociente;
		quociente=dividendo/divisor;
		resto=dividendo%divisor;
		return quociente;


	}



	


};