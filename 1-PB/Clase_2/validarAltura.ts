/*El siguiente programa tiene como finalidad informar al cliente si cuenta con la estatura necesaria como para utilizar un juego en el parque de diversiones*/
console.log("Bienvenidos a nuestro parque");
console.log("En este punto de verificacion se debera registrar su estatura");
import*as rls from 'readline-sync';
let altura : number = rls.questionFloat("Por favor ingrese el valor de su estatura:");
if (altura > 1.30) {
    console.log('Usted tiene la estatura permitida para utilizar este juego:'+ altura);
    console.log("Aguarde su turno que sera llamado por nuestros operadores");
    console.log("Muchas gracias");
}else{
    console.log('Uste NO posee la altura adecuada para utilizar este juego:'+ altura);
    console.log("Disculpe las molestias");
}
