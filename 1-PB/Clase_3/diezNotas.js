"use strict";
exports.__esModule = true;
/*Ejercicio de la filmina en el que calculamos el promedio de diez notas*/
var rls = require("readline-sync");
var nota;
var suma;
var promedio;
var contador;
suma = 0;
for (var contador_1 = 1; contador_1 < 11; contador_1++) {
    nota = rls.questionInt("Ingrese la nota:" + contador_1);
    suma += nota;
}
promedio = suma / 10;
console.log("El promedio de las notas es:" + promedio);
