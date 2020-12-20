using System;

// Faça um algoritmo que calcule e exiba o salário reajustado de dez funcionários de acordo com a seguinte regra: Salário até 300, reajuste de 50%; Salários maiores que 300, reajuste de 30%.
class ex04{

	static void Main(){

		int salario=0;

		for (int i=0;i<3;i++){
			Console.WriteLine("Informe o salário");
			salario=Convert.ToInt32(Console.ReadLine());
			if(salario<=300){
				Console.WriteLine("reajuste de: " + (salario * 1.50) + " Então ficou: "+ ((salario * 1.50) + salario));
			}else{
				Console.WriteLine("Reajuste de: " + salario * 1.30);
			}
		}
					
























// 		 Double salario = 0;
//  Double salarioNovo = 0;
//  Console.WriteLine("Efetua o reajuste salarial");
//  for (int i = 0; i < 3; i++)
//  {
//  Console.Write("Informe o salário: ");
//  salario = Convert.ToDouble(Console.ReadLine());
//  if (salario <= 300)
//  { //50%
//  salarioNovo = salario * 1.50;
//  }
//  else
//  { //30%
//  salarioNovo = salario + ((salario * 30) / 100);
//  }
//  Console.WriteLine("Salário reajustado: " + salarioNovo);
//  }

		
	}


};