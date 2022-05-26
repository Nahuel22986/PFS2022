import*as rls from 'readline-sync';
console.log("Esperando el colectivo");
let llegadaColectivo = rls.question( "Llego elcolectivo? (S/N):");
while(llegadaColectivo =="N") {
    console.log("Esperando el colectivo");
    llegadaColectivo = rls.question("Llego el colectivo?(S/N):");
}
console.log("Llego el colectivo");