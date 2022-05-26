/*En el siguiente ejercicio desarrollaremos un algoritmo para calcular el aumento de sueldo de los empleados de una empresa*/
import*as rls from 'readline-sync'
console.log("Hola laburante");
console.log("En este nomeclador sabra cual es su salario a cobrar con el porcentaje de aumento correspondiente")
let sueldo : number = rls.questionInt("Por favor, ingrese su salario actual:");
let aumento1 : number = sueldo * 0.2;
let aumento2 : number = sueldo * 0.1;
let aumento3 : number = sueldo * 0.05;
let salario1 : number = sueldo + aumento1;
let salario2 : number = sueldo + aumento2;
let salario3 : number = sueldo + aumento3;
let salario4 : number = sueldo
if (sueldo <= 1500){
    console.log("Su salario a cobrar es de: $"+ salario1);
}else{
    if (sueldo >= 1501 && sueldo <= 20000){
        console.log("Su salario a cobrar es de: $"+ salario2);
    }else{
        if(sueldo >= 20001 && sueldo <= 25000){
            console.log("Su salario a cobrar es de: $" +salario3);
        }else{
            if(sueldo > 25001){
                console.log("Su salario a cobrar es de: $"+ salario4);
            }
        }
    }
}                
