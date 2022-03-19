//meridiano de greenwich hora 0

/*      https://www.youtube.com/watch?v=aIHQsAjRLYU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=28
               Curso JavaScript: 27. Objeto Date - #jonmircha
    

               https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date#ejemplos
               
               https://momentjs.com/ */

console.log(Date());

let fecha = new Date();
console.log(`Trae la fecha completa : ${fecha}`);
console.log(`trae el dia del mes : ${fecha.getDate()}`);
//Dia de la semana D L M M J V S -> 0 1 2 3 4 5 6
console.log(`Trae el dia de la semana: ${fecha.getDay()}`);
//mes Ene feb mar abr may jun jul ago sep oct nov dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(`Trae el mes ${fecha.getMonth()}`);
console.log(`trae el año ${fecha.getFullYear()}`);
console.log(`Trae la hora ${fecha.getHours()}`);
console.log(`Trae los minutos ${fecha.getMinutes()}`);
console.log(`trae los segundos ${fecha.getSeconds()}`);
console.log(`Trae los mili segundos ${fecha.getMilliseconds()}`);

console.log(`Trae fecha humanamente leible xd ${fecha.toString()}`);
console.log(`Trae fecha mas pro ${fecha.toDateString()}`);
console.log(`trae hora y fecha muy entendible ${fecha.toLocaleDateString()}`);
console.log(`trae hora minificada ${fecha.toLocaleTimeString()}`);

//saber diferencia zonas horarias

console.log(`Diferencia minutos a hora 0 :${fecha.getTimezoneOffset()}`);
console.log(`Saber horarios de meridiano de greenwich: ${fecha.getUTCHours()}`);

//Mini programita para saber la edad de una persona
let fecha = new Date();

let nacimiento = 2000;
console.log(`Tienes ${fecha.getFullYear() - nacimiento} años`);
