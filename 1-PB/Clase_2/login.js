"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = rls.question("ingrese el usuario:");
var clave = rls.question("Ingrese la clave:");
if (usuario == "Juan" && clave == "claveJuan") {
    console.log("Acceso correcto");
}
else {
    console.log("Clave o usuario incorrecto");
    console.log("Ingrese nuevamente sus datos");
}
