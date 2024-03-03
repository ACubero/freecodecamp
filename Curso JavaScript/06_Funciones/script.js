// Los paréntesis siempre existen
function mostrarMensaje() {
    console.log("¡Hola, mundo!");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();


// Argumentos
function sumar(a, b) {
    return a + b;
}
function mostrarResultadoSuma(mensaje) {
    console.log(mensaje);
}
mostrarResultadoSuma(sumar(1,2));

function concatenarTresCadenas(cadena1,cadena2,cadena3) {
    console.log(cadena1+" "+cadena2+" "+cadena3);
}

concatenarTresCadenas("Estoy","aprendiendo","a programar");

// Ámbito global
var miVariableGlobal = 5;
console.log(miVariableGlobal);
function miFuncion() {
    console.log(miVariableGlobal);
}
miFuncion();

// Ambito variable local
function miLocalVariable() {
    var miLocalVar = 4;
    console.log(miLocalVar);
}
console.log(miLocalVar);

// Ambito Local y Global
function miLocalVariable() {
    var miLocalVar = 4;
    console.log(miLocalVar);
}
var miLocalVar = 5;
console.log(miLocalVar);

// Retornar un valor
