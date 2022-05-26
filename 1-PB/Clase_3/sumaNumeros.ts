import*as rls from 'readline-sync'
let numero1 : number = rls.questionInt("Ingrese el primer numero:");
let numero2 : number = rls.questionInt("Ingrese el segundo numero:");
let suma, actual : number;
actual = numero1
suma = 0;
while (actual <= numero2){
    suma = suma + actual;
    actual++;
}
console.log("El resultado es:"+suma)
