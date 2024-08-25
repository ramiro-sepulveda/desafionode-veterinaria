const { registrar, leer, limpiar } = require("./operaciones.js");
const argumentos = process.argv.slice(2);

const operacion = argumentos[0];
const nombre = argumentos[1];
const edad = argumentos[2];
const tipo = argumentos[3];
const color = argumentos[4];
const enfermedad = argumentos[5];

if (operacion === "registrar") {
  registrar(nombre, edad, tipo, color, enfermedad, "citas.json");
}
if (operacion === "leer") {
  leer("citas.json");
}
if (operacion === "limpiar") {
  limpiar("citas.json");
}
