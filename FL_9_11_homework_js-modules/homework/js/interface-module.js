import * as math from './calculating-module';
export function buttonClick (buttons) {

  let calculationResult = 0;
  let prevEntry = 0;
  let operation = null;
  let inputField = document.querySelector('.calculator-screen');
  let inputVal = 0;

  updateScreen(calculationResult);
  
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
      let btnVal = this.getAttribute('value');
      inputVal = inputField.getAttribute('value');
      console.log(prevEntry, inputVal, operation, calculationResult);
      if (btnVal === 'all-clear') {
        inputVal = '0';
        updateScreen(inputVal);
        calculationResult = 0;
        prevEntry = 0;
      } else if (btnVal === '.') {
        inputVal += '.';
        updateScreen(inputVal);
      } else if (isNumber(btnVal)) {
          inputVal = inputField.getAttribute('value');
          if (inputVal === '0') {
            inputVal = btnVal;
            updateScreen(inputVal);
          } else {
            inputVal += btnVal;
            updateScreen(inputVal);
          }
      } else if (isOperator(btnVal)) {
        inputVal = inputField.getAttribute('value');
        prevEntry = parseFloat(inputVal);
        operation = btnVal;
        inputVal = '0';
        updateScreen(inputVal);
      } else if (btnVal === 'sqrt') {
        inputVal = inputField.getAttribute('value');
        if (parseFloat(inputVal) >= 0) {
          calculationResult = math.sqrt(parseFloat(inputVal));
        } else {
          calculationResult = 'Error';
        }
        updateScreen(calculationResult);
        calculationResult = 0;
      } else if (btnVal === 'sqr') {
        inputVal = inputField.getAttribute('value');
        calculationResult = math.square(parseFloat(inputVal));
        updateScreen(calculationResult);
        calculationResult = 0;
      } else if (btnVal === '%') {
        if (operation) {
          inputVal = inputField.getAttribute('value');
          calculationResult = operate(prevEntry, math.percent(prevEntry, parseFloat(inputVal)), operation);
          updateScreen(calculationResult);
          operation = null;
          prevEntry = 0;
          calculationResult = 0;
        }
      } else if (btnVal === '=') {
        if (operation) {
          inputVal = inputField.getAttribute('value');
          calculationResult = operate(prevEntry, parseFloat(inputVal), operation);
          updateScreen(calculationResult);
          operation = null;
          prevEntry = 0;
          calculationResult = 0;
        }
      }

      e.preventDefault();
    }
  }

  function updateScreen (displayValue) {
    displayValue.toString().substring(0, 10);
    inputField.setAttribute('value', displayValue);
  }
  
  function isNumber (value) {
    return !isNaN(value);
  }
  
  function isOperator (value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
  }
  
  function operate (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation === '+') {
      return math.plus(a, b);
    }
    if (operation === '-') {
      return math.minus(a, b);
    }
    if (operation === '*') {
      return math.times(a, b);
    }
    if (operation === '/') {
      if (b !== 0) {
        return math.divide(a, b)
      } else {
        return 'Error'
      }
    }
  }
}

