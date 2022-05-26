"use strict";
exports.__esModule = true;
/*En el siguiente ejercicio desarrollaremos un algoritmo para calcular el aumento de sueldo de los empleados de una empresa*/
var rls = require("readline-sync");
console.log("Hola laburante");
console.log("En este nomeclador sabra cual es su salario a cobrar con el porcentaje de aumento correspondiente");
var sueldo = rls.questionInt("Por favor, ingrese su salario actual:");
var aumento1 = sueldo * 0.2;
var aumento2 = sueldo * 0.1;
var aumento3 = sueldo * 0.05;
var salario1 = sueldo + aumento1;
var salario2 = sueldo + aumento2;
var salario3 = sueldo + aumento3;
var salario4 = sueldo;
if (sueldo <= 1500) {
    console.log("Su salario a cobrar es de: $" + salario1);
}
else {
    if (sueldo >= 1501 && sueldo <= 20000) {
        console.log("Su salario a cobrar es de: $" + salario2);
    }
    else {
        if (sueldo >= 20001 && sueldo <= 25000) {
            console.log("Su salario a cobrar es de: $" + salario3);
        }
        else {
            if (sueldo > 25001) {
                console.log("Su salarioa cobrar es de: $" + salario4);
            }
        }
    }
}
