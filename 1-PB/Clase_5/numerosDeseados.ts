import*as rls from 'readline-sync'
let num : number[]=new Array(5);
let indice : number;
indice = 0;
while(indice < 5){
    indice = indice +1;
 num[indice] = rls.question("Ingrese el numero en el indice  ");
}
indice = 0;
while(indice < 5){
    indice = indice +1;
    console.log("Indice numero ", indice, "le corresponde el numero  ", num[indice]);
}
 