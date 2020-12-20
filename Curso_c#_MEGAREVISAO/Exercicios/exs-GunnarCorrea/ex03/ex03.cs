using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

//Desenvolva uma calculadora, onde será necessário entrar com a operação, primeiro e segundo valor, exiba o resultado na tela.

namespace Exercicio_03
{
    class Program
    {
        static void Main(string[] args)
        {

			double num1,num2,resultado=0;
			char operacao;


			Console.WriteLine("Escolha entre + | - | / | * ");

			Console.WriteLine("informe o tipo de operador: ");
			operacao = Convert.ToChar(Console.ReadLine());

			Console.Write("info primeiro valor: ");
			num1=Convert.ToInt32(Console.ReadLine());

			Console.Write("info segundo valor: ");
			num2=Convert.ToInt32(Console.ReadLine());

			switch(operacao){
				case '+':
					resultado= Adicao(num1, num2);

					break;
				case '-':
					resultado= Subtracao(num1, num2);

					break;
				case '/':
					resultado= Divisao(num1, num2);

					break;	
				case '*':
					resultado= Multiplicacao(num1, num2);

					break;														
			}

			Console.WriteLine(resultado);

            
        }

		//criação de metodos

		private static Double Adicao(double num1, double num2){
			return (num1 + num2);
		}

		private static Double Subtracao(double num1, double num2){
			return (num1 - num2);
		}

		private static Double Divisao(double num1, double num2){
			return (num1 / num2);
		}		

		private static Double Multiplicacao(double num1, double num2){
			return (num1 * num2);
		}

    }
}