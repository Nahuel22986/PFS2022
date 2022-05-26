import*as rls from 'readline-sync'
let numero : number= rls.questionInt("Ingrese el numero con el que realizaremos la tabla:");
let numero2 : number= rls.questionInt("Ingrese hasta que numero quiere multiplicar, para realizar la tabla:");
let contador : number;
contador = numero2;
let multiplicar : number;
console.log("La tabla de multiplicar quedara de la siguiente manera:")
for(contador =1; contador <= numero2; contador++){
        multiplicar = numero * contador;
        console.log(numero, "x", contador, "=", multiplicar);
}
