using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

//Desenvolva um algoritmo que solicite a entrada de uma frase, após isto troque todas as letras A ou a por &, porém não utilize o método Replace().

// Console.WriteLine(frase.Replace("a", "%"));
namespace Exercicio_03
{
    class Program
    {
        static void Main(string[] args)
        {
			string frase;
			Console.WriteLine("Digite uma frase: ");
			
			Program p=new Program();
			frase = Console.ReadLine();
			

			Console.WriteLine(p.trocaA(frase));


            
        }

		private string trocaA(string frase){
			if(frase.Length > 0){
				int Total = frase.Length;
				int i=0;

				var StringBuilder = new StringBuilder(frase);
				


				while(i < Total){
					if(StringBuilder[i] == 'a'){
						StringBuilder[i] = 'y';
					}
					i++;
				}
				frase = Convert.ToString(StringBuilder);

			}else{
				return null;
			}
			
			

		}
    }
}