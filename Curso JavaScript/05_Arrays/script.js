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