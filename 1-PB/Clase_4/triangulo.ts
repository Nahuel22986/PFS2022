import*as rls from 'readline-sync'
 let resultado : number = calcularAreaTriangulo(1,2)
 console.log("El area del triangulo sera:", resultado)
function calcularAreaTriangulo (base:number, altura:number): number{
    return (base*altura)/2;
}
