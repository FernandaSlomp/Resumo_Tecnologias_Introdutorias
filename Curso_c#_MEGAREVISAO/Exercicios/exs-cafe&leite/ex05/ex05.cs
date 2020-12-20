using System;

//Faça um algoritmo que leia a altura e a matricula de dez aluno. Mostre a matricula do aluno mais alto e do aluno mais baixo.

class ex05{

	static void Main(){

		String maMatricula;
		Double maAltura;

		String meMatricula;
		Double meAltura;

		String Matricula;
		Double Altura;

		Console.WriteLine("Informe a matricula");
		Matricula = Console.ReadLine();
		Console.WriteLine("altura");
		Altura =Convert.ToInt32(Console.ReadLine());

		maAltura = Altura;
		maMatricula = Matricula;

		meAltura = Altura;
		meMatricula = Matricula;

		int i=1;

		while(i<3){
			Console.WriteLine("Informe a matricula");
			Matricula = Console.ReadLine();
			Console.WriteLine("altura");
			Altura = Convert.ToInt32(Console.ReadLine());

			if (maAltura < Altura){
				maAltura = Altura;
				maMatricula = Matricula;
			}
			if (meAltura > Altura){
				meAltura = Altura;
				meMatricula = Matricula;
			}
			i++;

			

		}
		Console.WriteLine("A maior altura é: {0} com matricula {1} ", maAltura,maMatricula);
		Console.WriteLine("A menor altura é: {0} com matricula {1} ", meAltura,meMatricula);






		








// String maMatricula;
//  Double maAltura;

//  String meMatricula;
//  Double meAltura;

//  String Matricula;
//  Double Altura;

//  Console.WriteLine("Determina o maior aluno e o menor aluno");
//  Console.Write("Informe a matricula do aluno: ");
//  Matricula = Console.ReadLine();
//  Console.Write("Informe a altura do aluno: ");
//  Altura = Convert.ToDouble(Console.ReadLine());

//  maAltura = Altura;
//  meAltura = Altura;
//  maMatricula = Matricula;
//  meMatricula = Matricula;
//  int i = 1;
//  while (i < 5)
//  {
//  Console.Write("Informe a matricula do aluno: ");
//  Matricula = Console.ReadLine();
//  Console.Write("Informe a altura do aluno: ");
//  Altura = Convert.ToDouble(Console.ReadLine());
//  if(maAltura < Altura)
//  {
//  maMatricula = Matricula;
//  maAltura = Altura;
//  }

//  if (meAltura > Altura)
//  {
//  meMatricula = Matricula;
//  meAltura = Altura;
//  }
//  i++;
//  }
//  Console.WriteLine("Maior aluno");
//  Console.WriteLine("Matricula: {0}, Altura: {1}", maMatricula, maAltura);
//  Console.WriteLine("Menor aluno");
//  Console.WriteLine("Matricula: {0}, Altura: {1}", meMatricula, meAltura);
//  Console.ReadKey();

		
// 	}


	}}