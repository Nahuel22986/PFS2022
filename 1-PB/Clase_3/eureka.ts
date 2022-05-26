
import*as rls from'readline-sync'
let clave1 : string = rls.question("Ingrese clave:");
let clave : string = "eureka";
let contador : number;
contador = 1
while(clave != clave1 && contador <= 2){
    console.log("La clave es incorrecta");
    contador = contador +1;
    clave1 = rls.question( "Ingrese la clave:");
}
    if (clave1 == clave) {
        console.log("Bienvenidos a la pagina")
    } else {
        console.log("No podra ingresar a la pagina, intente mañana");
}
