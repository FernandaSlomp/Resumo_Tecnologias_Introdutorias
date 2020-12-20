using System;


//1 – Elabore um algoritmo que calcule a idade média de 5 alunos.

class ex01{

	static void Main(){

	double i1=0;
	double i2=0;
	double i3=0;
	double i4=0;
	double i5=0;
	double media=0;
		
	

	// Console.WriteLine("diga a 1 nota:");
	// i1 = Convert.ToDouble(Console.ReadLine());

	// Console.WriteLine("diga a 2 nota:");
	// i2 = Convert.ToDouble(Console.ReadLine());

	// Console.WriteLine("diga a 3 nota:");
	// i3 = Convert.ToDouble(Console.ReadLine());

	// Console.WriteLine("diga a 4 nota:");
	// i4 = Convert.ToDouble(Console.ReadLine());

	// Console.WriteLine("diga a 5 nota:");
	// i5 = Convert.ToDouble(Console.ReadLine());

	// media=(i1+i2+i3+i4+i5)/5;

	// Console.WriteLine("A média é {0}", media);

	for(int i=1;i <= 5; i++){
		Console.WriteLine("diga a {0} nota:", i);
		
		switch(i){
			case 1:
				i1=Convert.ToDouble(Console.ReadLine());
				break;
			case 2:
				i2=Convert.ToDouble(Console.ReadLine());
				break;
			case 3:
				i3=Convert.ToDouble(Console.ReadLine());
				break;
			case 4:
				i4=Convert.ToDouble(Console.ReadLine());
				break;
			case 5:
				i5=Convert.ToDouble(Console.ReadLine());
				break;
			default:
				Console.WriteLine("error");
				break;
		}
		

		
	}
	media=(i1+i2+i3+i4+i5)/5;
	Console.WriteLine("A média é {0}", media);

	
	
	
		
	}
}



	