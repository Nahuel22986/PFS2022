"use strict";
exports.__esModule = true;
/* Este es el programa para resolver los calculos de descuento de un producto*/
console.log("Calculo para el descuento del producto");
var rls = require("readline-sync");
var precioUnitario = rls.questionInt("Precio del producto:");
var cantidad = rls.questionInt("Ingrese la cantidad de productos:");
var total = precioUnitario * cantidad;
console.log("El total a pagar es de:" + total);
var porcentajeDescuento = total * 0.1;
var precioDescuento = total - porcentajeDescuento;
if (total > 1000) {
    console.log('El precio final con el descuento sera de:' + precioDescuento);
}
else {
    console.log('El precio final sera de:' + total);
}
