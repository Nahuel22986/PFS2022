/*Ejercicio de la filmina en el que calculamos el promedio de diez notas*/
import*as rls from 'readline-sync'
let nota : number;
let suma : number;
let promedio : number;
let contador : number;
suma = 0
for(let contador : number = 1; contador < 11; contador++){
    nota = rls.questionInt("Ingrese la nota"+ contador + ":");
    suma+=nota;  
}
promedio = suma/10
console.log("El promedio de las notas es:"+promedio)