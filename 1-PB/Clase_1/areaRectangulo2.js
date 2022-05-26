"use strict";
exports.__esModule = true;
/*En este ejercicio calcularemos el area de un rectangulo en base a los dator otorgados por el usuario*/
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Por favor, ingrese el valor de la base:");
var altura = readlineSync.questionInt("Ahora ingrese el valor de la altura:");
var area = base * altura;
console.log("El area del rectangulo sera de:", area);
