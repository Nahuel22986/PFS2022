"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var clave1 = rls.question("Ingrese clave:");
var clave = "eureka";
var contador;
contador = 1;
while (clave != clave1 && contador <= 2) {
    console.log("La clave es incorrecta");
    contador = contador + 1;
    clave1 = rls.question("Ingrese la clave:");
}
if (clave1 == clave) {
    console.log("Bienvenidos a la pagina");
}
else {
    console.log("No podra ingresar a la pagina, intente mañana");
}
