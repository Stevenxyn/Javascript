/*
          Curso JavaScript: 29. Operador de Cortocircuito - #jonmircha

          https://www.youtube.com/watch?v=SK7CCXjzVgA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=30
          */

//cuando se envia sin valor por defecto nos pondra desconocido RECOMENDADISIMO PAPAA
let saludar = (nombre = "Desconocido") => console.log(`Hola ${nombre}`);
saludar("Steven");
saludar();

function despedir(persona) {
  persona = persona || "Desconocido";
  console.log(`adios ${persona}`);
}
despedir("Hola");
despedir();

//OR Busca valores verdaderos
console.log("Cadena" || "Valor derecha");
console.log(1 || "Valor derecha");
console.log(-2 || "Valor derecha");
console.log(false || "Valor derecha");

//AND Busca valores falsos
console.log("Cadena" && "Valor derecha");
console.log("Cadena" && "Valor derecha");
