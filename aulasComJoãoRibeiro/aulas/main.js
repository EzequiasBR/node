const iniciado = "Serviço Iniciou!";

console.log(iniciado);

const objeto = require('./module');
const {soma} = require('./funcionSoma');

// console.log(objeto.n[0]);
// console.log(objeto.c[0]);
// console.log(objeto.c[2]);
console.log(soma(5,5));
