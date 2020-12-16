using System;

class Aula06{

	static void Main(){

		int n1,n2,n3;

		n1=10; n2=20; n3=30;

		// \n da o enter
		// \t tabulação 
	
		// Console.Write("n1={0}\n  n2={1},  n3={2}", n1,n2,n3);





		// :c coloca o cifrao
		//:p porcentagem
		double valorCompra=5.50;
		double valorVenda;
		double lucro=0.1;
		string produto="Pastel";

		valorVenda=valorCompra+(valorCompra *lucro);

		Console.WriteLine("prduto...........:{0,15}", produto);
		Console.WriteLine("val.compra.......:{0,15:c}", valorCompra);
		Console.WriteLine("Lucro...........:{0,15:p}", lucro);
		Console.WriteLine("Venda...........:{0,15:c}", valorVenda);

		// Console.Write(valorVenda);
	}



}