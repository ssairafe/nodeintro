console.log('Hello, World');

function doMath (num1, operator, num2) {
  if ( operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '/') {
    return num1 / num2;
  }
}
var num1 = parseFloat(process.argv[2]);
var operator = process.argv[3];
var num2 = parseFloat(process.argv[4]);
var answer = doMath(num1, operator , num2);
console.log(answer);
