let display = document.getElementById('display');
let currentOperator = '';
let operand1 = null;
let operand2 = null;
let result = null;

function appendNumber(num) {
  display.value += num;
}

function setOperator(operator) {
  currentOperator = operator;
  operand1 = parseFloat(display.value);
  display.value = '';
}

function calculate() {
  operand2 = parseFloat(display.value);
  
  switch (currentOperator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }
  
  display.value = result;
  operand1 = result;
}

function clearDisplay() {
  display.value = '';
  operand1 = null;
  operand2 = null;
  currentOperator = '';
  result = null;
}
