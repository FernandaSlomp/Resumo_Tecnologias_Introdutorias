using System;

//FOREACH -- PARA FAZER LEITURA E ITERAÇÃO DESSE ELEMENTOS  -- parece o v-for
class Aula22{

	static void Main(){

		int[] num=new int[3]{11,22,33};

		// for(int i=0;i<num.Length;i++){
		// 	Console.WriteLine(num[i]);

		// }

		foreach(int n in num ){ //variavel precisa ser do mesmo tipo da coleção
			Console.WriteLine(n);
		}

		
	}


};