import*as rls from 'readline-sync';
let usuario : string = rls.question("ingrese el usuario:");
let clave : string = rls.question("Ingrese la clave:")
if (usuario == "Juan" && clave == "claveJuan" ){
    console.log("Acceso correcto");
} else {
    console.log("Clave o usuario incorrecto");
    console.log("Ingrese nuevamente sus datos")
}