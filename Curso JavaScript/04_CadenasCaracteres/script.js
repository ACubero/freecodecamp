var nombre = "Alan";
var nombreDos = 'Miguel Angel';

console.log(nombre);
console.log(nombreDos);

// Escapar comillas
var miCadena ="Soy una cadena de caracteres \"con comillas\"";
console.log(miCadena);

var miMeta;
miMeta = 'Soy una cadena de caracteres "con comillas"';
console.log(miMeta);

/*Secuencias de escape

código | Resultado
--------------------
\'      Comilla Simple
\"      Comilla doble
\\      Barra invertida
\n      Línea Nueva
\r      Retorno de carro
\t      Tabulación
\b      Retroceso
\f      Salto de Página
*/

console.log("Cadena de texto con \nlínea nueva");
console.log("Cadena de texto con \ttabulador \ttabulador2");

//Concatenar cadenas
var nombreCompleto = "Alan" +" "+ "Turing";
console.log(nombreCompleto);

//Construir cadenas con variables
var verbo = "programar";
var mensaje = "Estoy aprendiendo a "+verbo + " con freecodecamp";
console.log(mensaje);

//Agregar variables a cadenas de caracteres
var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con freecodecamp";
console.log(mensajeCompleto);

mensajeCompleto += parteFinal;
console.log(mensajeCompleto);

//Longitud de una cadena de caracteres
var miCadena;
miCadena = "Estoy aprendiendo a programas JavaScript ";
console.log("Número de caracteres: "+miCadena.length);

//Notación de corchetes: Primer carácter -- Comienza por 0
var lenguajeDeProgramacion = "JavaScript";
console.log(lenguajeDeProgramacion[0]);

// Inmutabilidad de Cadenas de Caracteres
var miCadena = "Jola, Mundo";
console.log(miCadena);
miCadena[0] = "H"; // no se puede cambiar, solo se puede cambiar todo el texto
miCadena = "Hola, Mundo";
console.log(miCadena);

// Notación de corchetes: enésimo carácter
var miCadena = "JavaScript";
console.log(miCadena[0]);
console.log(miCadena[1]);
console.log(miCadena[2]);
console.log(miCadena[3]);
console.log(miCadena[4]);
console.log(miCadena[5]);
console.log(miCadena[6]);
console.log(miCadena[7]);
console.log(miCadena[8]);
console.log(miCadena[9]);
console.log(miCadena[10]); //NO da error pero devuelve undefined
console.log(miCadena[-1]); //NO da error pero devuelve undefined

// Notación de Corchetes: ultimo caracter
var miCadena;
//El último indice siempre es longitud del texto - 1
miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]);
miCadena = "Python";
console.log(miCadena[miCadena.length - 1]);

// Notación de Cochetes: de izquierda a derecha
var miCadena;
var n;
miCadena = "JavaScript";
n = 4;
console.log(miCadena[miCadena.length - n]);

// Palabras en blanco
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

var palabrasEnBlanco = "El "+miSustantivo+" "+miVerbo+" "+miAdverbio+" a la tienda";
console.log(palabrasEnBlanco);

var miSustantivo = "bicicleta";
var miAdjetivo = "pequeña";
var miVerbo = "voló";
var miAdverbio = "rápidamente";
var palabrasEnBlanco = "La "+miSustantivo+" "+miVerbo+" "+miAdverbio+" a la tienda";
console.log(palabrasEnBlanco);