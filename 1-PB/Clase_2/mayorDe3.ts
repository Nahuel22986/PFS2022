/* En el siguiente ejercicios representaremos cual sera el mayor de los tres numeros que se ingresan al programa*/
import*as rls from 'readline-sync';
let num1 : number = rls.questionInt("Ingrese un numero:");
let num2 : number = rls.questionInt("Ingrese el segundo numero:");
let num3 : number = rls.questionInt("Ingrese el tercer numero:");
if(num1 > num2 && num1 > num2 ){
    console.log("El numero de valor mas alto es:" + num1);
  }else{
    if(num2 > num1 && num2 > num3){
            console.log("El numero de valor mas grande es:" + num2);
        }else{
            if (num3 > num1 && num3 > num3){
                console.log("El numero de valor mas grande es:" + num3);
            }
        }
    }