
// index.js (fichero de librería)
// Funciones de la calculadora

const resta = (op1,op2) => {return op1-op2}
const producto = (op1,op2) => {return op1*op2}
const division = (op1,op2) => {return op1/op2}
const cuadrado = (op1,op2) => {op1*op2}

module.exports = {resta, producto, division}