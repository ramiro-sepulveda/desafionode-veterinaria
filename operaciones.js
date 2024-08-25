const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad, archivo) => {
  const datosNuevos = {
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  //   console.log(datosNuevos, archivo);
  const datosCitas = JSON.parse(fs.readFileSync(archivo, "utf8"));
  //   console.log("antes del push", datosCitas);
  datosCitas.push(datosNuevos);
  //   console.log("despues del push", datosCitas);
  fs.writeFileSync("citas.json", JSON.stringify(datosCitas));
};

const leer = (archivo) => {
  const citas = fs.readFileSync(archivo, "utf8");
  JSON.parse(citas).forEach((citas) => {
    console.log(citas);
  });
};

const limpiar = (archivo) => {
  fs.writeFileSync(archivo, "[]");
};

module.exports = { registrar, leer, limpiar };
