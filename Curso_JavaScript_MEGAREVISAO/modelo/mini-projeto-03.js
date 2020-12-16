//USANDO FIZZBUZZ FUNCTION
const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
	if (typeof entrada !== 'number')
		return 'não é um number';
	if ( (entrada % 5 === 0) && (entrada % 3 === 0) )
		return 'FizzBuzz';
	if (entrada % 3 === 0)
		return 'Fizz';
	if (entrada % 5 ===0)
		return 'Buzz';
	
	return entrada;
}
