using System;
//PUBLIC X PRIVATE

//NÍVEL DE PROTEÇÃO 

//private - ele so pode ser usado dentro da classe 
//proteção aos membros. 


class Jogador{
	private int energia;

	private string nome;

	public Jogador(string nome){
		this.nome=nome;
		energia=100;
	}

	public int getEnergia(){ //para pegar membro da classe -- private
		return energia;

	}

	public string getNome(){ //para pegar membro da classe -- private
		return nome;

	}

	public void setEnergia(int e){
		if(e < 0){
			if(energia + e < 0 ){
				energia=0;
			}else{
				energia+=e;
			}
		}else if(e>0){
			if(energia +e>100){
				energia=100;
			}else{
				energia+=e;
			}

		}

	}
}

class Aula33{


	static void Main(){

		Jogador j1=new Jogador("fer");

		j1.setEnergia(-20);
		j1.setEnergia(-20);
		j1.setEnergia(-20);
		j1.setEnergia(-20);
		j1.setEnergia(-20);
		j1.setEnergia(-20);


		Console.WriteLine("Nome {0} | energia {1}", j1.getNome(), j1.getEnergia());


		
	}


};