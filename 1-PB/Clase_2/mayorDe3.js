"use strict";
exports.__esModule = true;
/* En el siguiente ejercicios validaremos cual sera el mayor de los tres numeros que se ingresan al programa*/
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese un numero:");
var num2 = rls.questionInt("Ingrese el segundo numero:");
var num3 = rls.questionInt("Ingrese el tercer numero:");
if (num1 > num2 && num1 > num2) {
    console.log("El numero de valor mas alto es:" + num1);
}
else {
    if (num2 > num1 && num2 > num3) {
        console.log("El numero de valor mas grande es:" + num2);
    }
    else {
        if (num3 > num1 && num3 > num3) {
            console.log("El numero de valor mas grande es:" + num3);
        }
    }
}
