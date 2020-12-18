using System;
//METODOS
class Aula24{

	static void Main(){ //como o main é static os outros dentro também precisam ser
		// for(int i=0;i<10;i++){
		// 	ola();
		// }; 
		int v1,v2,r;
		v1=Convert.ToInt32(Console.ReadLine());
		v2=Convert.ToInt32(Console.ReadLine());
		// soma(v1,v2);
		r=soma2(v1,v2);

		// Console.WriteLine("A soma de {0} e {1} é: {2}", v1,v2,r);

		Console.WriteLine("A soma de {0} e {1} é: {2}", v1,v2,soma2(v1,v2));
	
		
	}

	static void soma(int n1, int n2){ //static - | void = não retorna nada | ola() = nome do método(parametros de entrada do metodo)
		int res=n1+n2;
		Console.WriteLine("A soma de {0} e {1} é: {2}", n1,n2,res);
	
	}

	static int soma2(int n1, int n2){ //int - agr retorna um valor
		int res=n1+n2;
		return res;
	
	}

	static double nome(int n1, double n2, string texto){
		double t;
		return t;
	}

	


};