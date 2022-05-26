import*as rls from 'readline-sync'
let dividendo : number = rls.questionInt("Ingresar dividendo:")
let divisor : number = rls.questionInt("ingresar divisor:")
function esMultiplo(dividendo, divisor) : boolean{
    let resto : number;
    resto = dividendo%divisor
    if(resto == 0){
    return true
    }else{
    return false
    }
    
}
console.log(esMultiplo(dividendo, divisor))