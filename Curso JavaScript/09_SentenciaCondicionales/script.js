// Condicionales
console.log("Sentencias condicionales -- if"); 
var x = 5;
if (x>3 || x>4) {
    console.log("Condición es verdadera"); 
}

var estacion = "Invierno";
if (estacion == "Invierno") {
    console.log("Estamos en invierno");
}
else {
    console.log("No estamos en Invierno")
}
// else
console.log("Sentencias condicionales -- else"); 
var estacion = "Invierno";
if (estacion == "Verano") {
    console.log("Estamos en invierno");
} else {
    console.log("No estamos en Invierno")
}

// elseif
console.log("Sentencias condicionales -- elseif"); 
function clasificarValor(valor) {
    if (valor%2 == 0) {
        console.log("Divisible entre 2")
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3")

    } else {
        console.log("No es divisible entre las opciones")

    }
}

clasificarValor(2);
clasificarValor(15);
clasificarValor(7);

// orden lógico
console.log("Sentencias condicionales -- orden lógico"); 
function clasificarValor(valor) {
    if (valor < 5) {
        console.log("Menor que 5")
    } else if (valor < 10 ) {
        console.log("Menor que 10")

    } else {
        console.log("Mayor o igual a 10")

    }
}
clasificarValor(2); // también es menor de 10, pero entra en la primera condición
clasificarValor(5);
clasificarValor(21);

// encadenar sentencia if elseif
console.log("Sentencias condicionales -- if elseif"); 
function interpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5) {
        console.log("Bajo Peso");
    } else if (indiceDeMasaCorporal <= 24.9) {
        console.log("Normal");
    } else if (indiceDeMasaCorporal <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obeso");
    }
}

interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(25);
interpretarIMC(33);






