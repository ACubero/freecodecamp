//Operadores de igualdad
console.log("Operadores de igualdad =="); 
console.log(51==5);
console.log("Hola"=="Hola");
console.log("Hola"=="HolA");
console.log([1,2,3]==[1,2,3]); // Los arreglos no se pueden comparar, porque son 2 objetos diferentes
console.log(9==9);
console.log(9=="9"); // porque lo convierte en el mismo tipo de dato

// Operadores de igualdad estricta
console.log("Operadores de igualdad estricta ==="); 
console.log(9===9); //no lo convierte en el mismo tipo de dato y lo compara
console.log(9==="9"); //no lo convierte en el mismo tipo de dato y lo compara
console.log("9"==="9"); //no lo convierte en el mismo tipo de dato y lo compara

// Operador de desigualdad o distinto
console.log("Operador de desigualdad o distinto !="); 
console.log(9!=9);
console.log(9!="9"); // porque lo convierte en el mismo tipo de dato

// Operadores de desigualdad estricta o distinto estricto
console.log("Operadores de desigualdad estricta o distinto estricto !==="); 
console.log(9!==9); //no lo convierte en el mismo tipo de dato y lo compara
console.log(9!=="9"); //no lo convierte en el mismo tipo de dato y lo compara
console.log("9"!=="9"); //no lo convierte en el mismo tipo de dato y lo compara

// Operador mayor y menor que
console.log("Operador mayor > y menor que <" ); 
var a = 1;
var b = 10;
console.log(a>b); 
console.log(a<b); 
console.log("a"<"b"); // orden alfabético
console.log("abc">"acb"); // orden alfabático por cada posición a > a, b>c 
console.log("abc">"ab"); // si tiene más caracteres

// Operador mayor igual y menor igual que
console.log("Operador mayor igual >= y menor igual que <="); 
var a = 1;
var b = 10;
console.log(a>=b); 
console.log(a<=b); 
console.log("a"<="b"); // orden alfabético
console.log("abc">="acb"); // orden alfabático por cada posición a >= a, b>=c 
console.log("abc">="ab"); // si tiene más caracteres

// Operador lógicos
console.log("Operador AND &&"); 
var a = 1;
var b = 10;
var c = 10;
console.log(a < b && c == b); 
console.log("Operador OR ||"); 
var a = 1;
var b = 10;
var c = 10;
console.log(a < b || c < b); 
console.log("Operador NOT !"); 
var a = 51;
var b = 10;
console.log(!(a < b)); 
