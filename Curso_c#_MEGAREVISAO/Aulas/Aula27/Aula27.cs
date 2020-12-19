using System;
//ARGUMENTO PARAMS - pode entrar com mais parametros sem exemplificar dentro do ()
// NADA | 1 | +1 
class Aula27{

	static void Main(){
		soma(2,3,3,80,88,99);

		
	}

	static void soma(params int[]nome){
		int res=0; //CUIDADO AO INICIALIZAR AS VARIAVEIS

		if(nome.Length < 1){
			Console.WriteLine("Não existem valores a serem somados");
		}else if(nome.Length < 2){
			Console.WriteLine("Somente um valor passado - Valores insuficientes para soma: {0}", nome[0]);
		}else{
			for(int i=0;i<nome.Length;i++){
				res+=nome[i];
			}
			Console.WriteLine("A soma valores é {0}", res);
		}

		
	}


};