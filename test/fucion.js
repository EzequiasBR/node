const prompt = require('prompt-sync')();

function calcular(a,b,operate){
  let res;
  switch(operate){
   case '+':
    res = (a + b);
    break
   case '-':
    res = (a - b);
    break 
   case '/':
    res = (a / b);
    break
   case '*':
    res = (a * b);
    break
   default:
     res = ('sorry!this operation does not exist');
  }
  return console.log(res) ;
}

let a = parseInt(prompt('digite o primeiro valor : '));
let b = parseInt(prompt('digite o segundo valor : '));
let operate = prompt('qual tipo de operação exemplo: *,/,-,+ : ');

calcular(a,b,operate);