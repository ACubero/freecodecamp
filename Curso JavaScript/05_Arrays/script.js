//Arrays
var miArreglo = ["John",24];
console.log(miArreglo);
console.log(miArreglo[0]);
console.log(miArreglo[1]);

var estudiantes = ["John","Nora","Jose Luis"];
console.log(estudiantes);

var notas = [0,1,2];
console.log(notas);

// Arrays anidados y acceder a los elementos del array
var listaDeEstudiantes = [["Nora",97],["Gino",78]];
console.log(listaDeEstudiantes);

var listaDeProductos = [["Camisas",5.67,"S134"],["Celular",250,"S356"],["Zapatos",23,"S789"]];
console.log(listaDeProductos);
console.log(listaDeProductos[0]);
console.log(listaDeProductos[0][0]);

// Modificar los dtos de una array, las cadenas de caracteres no son
var miArreglo = [10,20,30];
console.log(miArreglo[0]);
miArreglo[0] = 40;
console.log(miArreglo[0]);
miArreglo[0] =[1,2,3];
console.log(miArreglo[0]);
console.log(miArreglo.length);

// Acceder a arrays anidados
var listaDeProductos = [["Camisas",5.67,"S134"],["Celular",250,"S356"],["Zapatos",23,"S789"]];
console.log(listaDeProductos[0][0]);
console.log(listaDeProductos[0][1]);
console.log(listaDeProductos[0][2]);

// .push(), agregar elementos a un array en la última posición
var estaciones = ["Invierno","Otoño","Primavera"];
console.log(estaciones);
estaciones.push("Verano");
console.log(estaciones);

// .pop(), eliminar el último elemento de un array
var estaciones = ["Invierno","Otoño","Primavera","Verano"];
var estacionEliminada;
console.log(estaciones);
// pop lo elimina y lo retorna
estacionEliminada = estaciones.pop();
console.log(estaciones);
console.log(estacionEliminada);

// .shift(), eliminar el primer elemento de un array
var estaciones = ["Invierno","Otoño","Primavera","Verano"];
var estacionEliminada;
console.log(estaciones);
// shift lo elimina y lo retorna
estacionEliminada = estaciones.shift();
console.log(estaciones);
console.log(estacionEliminada);

// .unshift(), agregar elemento al principio del array
var estaciones = ["Otoño","Primavera","Verano"];
console.log(estaciones);
estaciones.unshift("Invierno");
console.log(estaciones);
