/*
          Curso JavaScript: 31. Expresiones Regulares - #jonmircha
     https://www.youtube.com/watch?v=aPkBloR9MEI&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=32
          
     https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular#:~:text=Las%20expresiones%20regulares%20son%20patrones,o%20reconocer%20cadenas%20de%20texto.
     
     secuencia de caracteres que forman un patron de busqueda
     */

let cadena =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti facere natus eos. Deserunt, suscipit commodi ut sunt maxime fugiat. Repellat dolore tenetur eum ullam nobis at fugiat nulla consequatur nisi.";

let expReg = new RegExp("lorem", "i");
let expReg2 = /lorem/gi;

//Valida que efectivamente exista lorem dentro de cadena y con "i" lee tambien las que estan en (L) o (l)
console.log(expReg.test(cadena));
console.log(expReg2.exec(cadena));
