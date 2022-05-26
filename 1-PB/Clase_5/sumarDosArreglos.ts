import*as rls from 'readline-sync'
let dimension : number = rls.questionInt("Ingrese el numero de la dimension del arreglo:");
let vector1 : number[]=new Array(dimension);
let vector2 : number[]=new Array(dimension);
let suma : number;
let indice : number;
indice = 0;
suma=0;
for(indice= 0; indice<= dimension; indice ++){
 vector1 [indice] = rls.questionInt("Ingrese el numero en el indice " +indice+ ":" );
 vector2 [indice] = rls.questionInt("Ingrese el numero en el indice " +indice+ ":" );
 
}
for(indice= 0; indice<= dimension; indice ++){
suma= vector1[indice] + vector2[indice]
}

console.log("El resultado de la suma de los numeros ingresados sera de:", suma)
