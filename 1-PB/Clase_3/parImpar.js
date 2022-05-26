"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero;
var par = numero % 2;
var impar = numero % 3;
numero = rls.questionInt("Ingresar numero:");
while (numero == 0) {
    console.log("El numero que ingreso debe ser entero y mayor que cero");
    numero = rls.questionInt("Ingresar numero:");
}
if (numero == par && numero > 1) {
    console.log("El numero que ingreso es par");
}
else {
    console.log("El numero ingresado es impar");
}
