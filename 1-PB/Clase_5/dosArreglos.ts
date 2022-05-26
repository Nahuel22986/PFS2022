import*as rls from 'readline-sync'
let nombres : string[]=new Array(2);
let numero : number[]=new Array(3);
let indice : number;
for (indice = 0; indice < 2; indice++ ){
    nombres [indice]= rls.question("Ingrese el nombre: ");
};
for (indice = 0; indice < 3; indice++ ){
    numero[indice] = rls.questionInt("Ingrese el numero: "); 
};
for (indice = 0; indice < 2; indice++ ){
    console.log("Indice numero ", indice, "le corresponde el nombre  ", nombres[indice] );   
};
console.log("....................................................................");
for (indice = 0; indice < 3; indice++ ){
    console.log("Indice numero ", indice, "le corresponde el numero  ", numero[indice] ); 
}
