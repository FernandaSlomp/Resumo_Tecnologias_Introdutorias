using System;
//MATRIZ // VETORES 
class Aula18{

	static void Main(){
		int[,] n=new int[1,5]; //3 LINHAS 5 COLUNAS
		int[,] num=new int[]{{10,20},{30,40}};
		/*
		1 2 3 4 5 
		6 7 8 9 15
		25 35 45 55 65
		*/ 
		
		
		

		n[0,0]=10;
		n[0,1]=20;
		n[0,2]=30;
		n[0,3]=40;
		n[0,4]=50;


		Console.WriteLine(n[0,1]);

		
	}

	

};