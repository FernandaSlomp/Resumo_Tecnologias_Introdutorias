using System;
//METODOS POR ARRAYS 
class Aula23{

	static void Main(){

		int[] vetor1=new int[5];
		int[] vetor2=new int[5];
		int[] vetor3=new int[5];
		int[,] matriz=new int[2,5]{{11,22,33,44,55},{66,77,88,99,00}};


		// method random
		Random random=new Random();
		for(int i=0; i< vetor1.Length;i++){
			vetor1[i]=random.Next(50);
		};

		Console.WriteLine("Elementos do vetor 1");
		foreach(int n in vetor1){
			Console.Write(n);
		}


		//1 - public static int BinarySearch(array,valor);
		//Serve para retornar a posição do elemento procurado

		int procurado=33;
		int pos=Array.BinarySearch(vetor1,procurado);
		Console.WriteLine("valor {0} na posição {1}", procurado,pos);

		//2 - public static void Copy(Array_origem, Ar_destino, qtde_elementos);
		//Serve para copiar Vetor2 recebe os elementos do vetor1 - A partir do array
		Array.Copy(vetor1, vetor2,vetor1.Length);

		//3 - public void CopyTo(A4e_destino,a_partir_desta_pos);
		//chama apartir do vetor de origem 
		vetor1.CopyTo(vetor3,0);

		//4 - public int getLowerBound(dimensão)
		//menor indice do array ou matriz // or upper
		int MenorIndiceVetor=vetor1.GetLowerBound(0);
		// int MaiorIndiceMatriz_D1=matriz.getUpperBound(1);

		//5 - public object GetValue(long indice)
		//retorna objeto / valor/elemento que esta na posição de indice

		int valor0=Convert.ToInt32(vetor1.GetValue(3));
		int valor1=Convert.ToInt32(matriz.GetValue(1,3));

		//6 - public static int IndexOf
		//Retorna o indice que  - do primeiro número que encontrar
		//LastIndexOf - já esse retorna a posição do último.

		int indice1=Array.IndexOf(vetor1,3);

		//7 - public static void Reverse(array)
		// reverte a lista
		Array.Reverse(vetor1);

		//8 - public void SetValue(object valor, long pos);
		//ajuda a colocar objetos dentro do array
		vetor2.SetValue(99,0);///99 na posição 0
		for(int i=0;i<vetor2.Length;i++){
			vetor2.SetValue(0,1); //colocando 0 pra todos os valores. 
		}

		//9 - public stativ void Srot(array)
		//Para ordenar em ordem crescente
		Array.Sort(vetor1);
		Array.Sort(vetor1);

		

	}


};