import*as rls from 'readline-sync'
let dividendo : number = rls.questionInt("Ingresar dividendo:")
let divisor : number;

function numDivisores(num:number):number {
    let suma : number = 0;
    for (let i = 1; i <= num; i++) {
        if (esMultiplo (num, i)) {
            suma++;
        }
    } 
    return suma;
}
function esMultiplo(dividendo, divisor) : boolean{
    let resto : number;
    resto = dividendo%divisor
    if(resto == 0){
    return true
    }else{
    return false
    }
}
console.log ("Los divisores son:", numDivisores(dividendo),".");

