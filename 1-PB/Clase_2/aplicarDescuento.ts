/* Este es el programa para resolver los calculos de descuento de un producto*/
console.log("Calculo para el descuento del producto")
import*as rls from 'readline-sync'
let precioUnitario : number = rls.questionInt("Precio del producto:");
let cantidad : number = rls.questionInt("Ingrese la cantidad de productos:");
let total : number = precioUnitario * cantidad;
console.log("El total a pagar es de:"+ total);
let porcentajeDescuento : number = total * 0.1;
let precioDescuento : number = total - porcentajeDescuento;
if (total>1000) {
    console.log('El precio final con el descuento sera de:'+ precioDescuento);
}else{
    console.log('El precio final sera de:'+ total);
}