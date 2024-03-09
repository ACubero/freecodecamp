function nombreGolpesGolf(par,golpes) {
    if (golpes == 1 && par != 0){
        nombreGolpe = "Hole-in-one!"
    } else if (golpes == (par-1)) {
        nombreGolpe = "Birdie";
    } else if (golpes == (par-2)) {
        nombreGolpe = "Eagle";
    } else if (golpes == par) {
        nombreGolpe = "Par";
    } else if (golpes == (par+3)) {
        nombreGolpe = "Go Home!";
    } else if (golpes == (par+2)) {
        nombreGolpe = "Double Bogey";
    } else  {
        nombreGolpe = "Bogey";
    }
    return nombreGolpe;
}
console.log(nombreGolpesGolf(1,1));
console.log(nombreGolpesGolf(22,22));
console.log(nombreGolpesGolf(22,21));
console.log(nombreGolpesGolf(22,20));
console.log(nombreGolpesGolf(22,23));
console.log(nombreGolpesGolf(22,24));
console.log(nombreGolpesGolf(22,25));