import*as rls from 'readline-sync'
let dimension : number = rls.questionInt("Ingrese el numero de la dimension del arreglo:");
let num : number[]=new Array(dimension);
let suma : number;
let indice : number;
indice = 0;
suma=0;
while(indice < dimension){
 num[indice] = rls.questionInt("Ingrese el numero en el indice " +indice+ ":" );
 suma = suma + num[indice];
 indice = indice +1;
}
console.log("El resultado de la suma de los numeros ingresados sera de:", suma)