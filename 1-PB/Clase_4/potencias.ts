import*as rls from 'readline-sync'
let base : number = rls.questionInt("Ingresar el balor de la base:");
let exponente : number = rls.questionInt("Ingresar el valor del exponente:");
function potencia (base, exponente): number{
    return(base**exponente);
}
console.log("El resultado de la potencia sera:"+ potencia(base, exponente));
