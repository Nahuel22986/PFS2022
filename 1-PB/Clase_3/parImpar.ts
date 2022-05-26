
import*as rls from 'readline-sync';
let numero : number;
let par : number = numero % 2;
let impar : number = numero % 3;
numero = rls.questionInt("Ingresar numero:");
while (numero == 0 ) {
    console.log("El numero que ingreso debe ser entero y mayor que cero")
    numero = rls.questionInt("Ingresar numero:");
}
if (numero == par && numero > 1){
    console.log("El numero que ingreso es par");
}else{
    console.log("El numero ingresado es impar");
}
