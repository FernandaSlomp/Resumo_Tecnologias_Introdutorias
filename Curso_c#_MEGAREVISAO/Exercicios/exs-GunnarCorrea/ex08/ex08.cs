using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Desenvolva um algoritmo que solicite a entrada de nome, e-mail, telefone e RG de um determinado usuário e grave em um arquivo de texto. Exiba as informações na tela a partir do arquivo de texto gerado.

namespace Exercicio_08
{
    class Program
    {
        static void Main(string[] args)
        {
			string acao="";
			string caminho="usuario.txt";
			string nome="",email="";

			Console.WriteLine("S para sair \n G para gravar \n L para ler");

			acao = Console.ReadLine().ToUpper();
			Console.WriteLine();

			while (acao != "S"){
				if(acao == "G"){
					nome = Console.ReadLine();
					email=Console.ReadLine();

					Console.WriteLine("nome: " + nome);
					Console.WriteLine("EMAIL:" + email);

					StreamWriter sw =new StreamWriter(caminho, true); // true para manter oq for digitado

					sw.WriteLine("nome: " + nome);
					sw.WriteLine("EMAIL:" + email);

					sw.Close();


				}else if (acao == "L")
                {
                    StreamReader sr = new StreamReader(caminho);

                    while (sr.EndOfStream != true)
                    {
                        Console.WriteLine(sr.ReadLine());
                    }

                    sr.Close();
                }

                Console.WriteLine();
                Console.WriteLine("Pressione uma tecla para continuar...");
                Console.ReadKey();

				Console.Clear();
				Console.WriteLine("S para sair \n G para gravar \n L para ler");
				acao = Console.ReadLine().ToUpper();


			}
			{
				
			}

			


            
        }
    }
}