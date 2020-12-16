using System;

class Aula10{

	enum DiasSemana{Domingo, Segunda, Terça,Quarta, Quinta,Sexta, Sabado};

	static void Main(){
		// DiasSemana ds = DiasSemana.Domingo;
		// DiasSemana ds = (DiasSemana)3; -- aqui devolve o valro que esta no indice 3
		int ds=(int)DiasSemana.Sexta; // aqui devolve o indice de sexta

		Console.WriteLine(ds);
	}

};