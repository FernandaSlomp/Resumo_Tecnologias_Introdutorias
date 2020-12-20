using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

//Desenvolva um algoritmo que solicite a entrada da idade de um determinado usuário, se for menor que 18 anos exiba na cor vermelha “Sem permissão”, caso seja maior ou igual a 18 anos exiba na cor verde “Permissão concedida”.

namespace Exercicio_04
{
    class Program
    {
        static void Main(string[] args)
        {
			Processar();
            Console.ReadKey();
        }

		private static void Processar(){
			int idade=0;
			Console.WriteLine("Info sua idade: ");
			idade=Convert.ToInt32(Console.ReadLine());

			if (idade >= 18){
				Console.ForegroundColor = ConsoleColor.Green;
				Console.WriteLine("Acesso permitido");
			}else{
				Console.ForegroundColor = ConsoleColor.Red;
				Console.WriteLine("Acesso negado");
			}
		}

    }
}