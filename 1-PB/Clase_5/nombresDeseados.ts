import * as rls from 'readline-sync';
​
let dimension : number = rls.questionInt("Ingrese la dimension: ");
let nombrePersonas : string [] = new Array (dimension);
let indice : number;
indice = 0
​
while(indice < dimension){
    indice = indice+1
    nombrePersonas[indice] = rls.question("Ingrese el nombre que desee poner en el lugar", indice,  );
}
​indice=0
while(indice < dimension){
    indice=indice+1
    console.log ("La persona que ingreso en la posicion", indice,  "es:",nombrePersonas[indice]);
}