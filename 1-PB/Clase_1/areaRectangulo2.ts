/*En este ejercicio calcularemos el area de un rectangulo en base a los dator otorgados por el usuario*/
import*as readlineSync from 'readline-sync';
let base : number = readlineSync.questionInt("Por favor, ingrese el valor de la base:");
let altura : number = readlineSync.questionInt("Ahora ingrese el valor de la altura:");
let area : number = base * altura;
console.log("El area del rectangulo sera de:", area);