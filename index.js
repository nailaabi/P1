//1 ingresa tu numero favorito , cual es el doble de tu numero favorito 

const prompt = require( 'prompt-sync') ();

console.log ('Holaaa bienvenido!!')

const num1=Number ( prompt( 'Ingresa tu numero favorito: '));

const num2= Number ( prompt ('Cual es el doble de tu numero favorito??')) 

const doble = num1 * 2


if(num2 == doble){
    console.log ('Exacto el doble de tu numero es:', doble)
} else { 
    console.log ('Ese no es el doble de tu numero favorito. ');
}
   