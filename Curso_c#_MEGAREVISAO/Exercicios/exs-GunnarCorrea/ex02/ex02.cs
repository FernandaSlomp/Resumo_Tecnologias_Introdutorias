using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

//Desenvolva um algoritmo que permita a entrada do nome do usuário e exiba na tela.

namespace Exercicio_02
{
    class Program
    {
        static void Main(string[] args)
        {
			string nome;
			Console.WriteLine("Seu nome");
			nome= Console.ReadLine();

			Console.ForegroundColor = ConsoleColor.Red;
			Console.WriteLine(string.Format("Seu nome é: {0}", nome));

			Console.ReadKey();


            
        }
    }
}