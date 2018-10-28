import {buttonClick} from './interface-module';
import '../css/styles.css';

const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const calculator = document.createElement('div');
calculator.setAttribute('class', 'calculator');

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('class', 'calculator-screen');
input.setAttribute('value', '0');
input.disabled = true;
calculator.appendChild(input);

const keys = document.createElement('div');
keys.setAttribute('class', 'calculator-keys');

const plusBtn = document.createElement('button');
plusBtn.setAttribute('type', 'button');
plusBtn.setAttribute('class', 'operator');
plusBtn.setAttribute('value', '+');
const faPlus = document.createElement('i');
faPlus.classList.add('fas', 'fa-plus');
plusBtn.appendChild(faPlus);
keys.appendChild(plusBtn);

const minusBtn = document.createElement('button');
minusBtn.setAttribute('type', 'button');
minusBtn.setAttribute('class', 'operator');
minusBtn.setAttribute('value', '-');
const faMinus = document.createElement('i');
faMinus.classList.add('fas', 'fa-minus');
minusBtn.appendChild(faMinus);
keys.appendChild(minusBtn);

const timesBtn = document.createElement('button');
timesBtn.setAttribute('type', 'button');
timesBtn.setAttribute('class', 'operator');
timesBtn.setAttribute('value', '*');
const faTimes = document.createElement('i');
faTimes.classList.add('fas', 'fa-times');
timesBtn.appendChild(faTimes);
keys.appendChild(timesBtn);

const divideBtn = document.createElement('button');
divideBtn.setAttribute('type', 'button');
divideBtn.setAttribute('class', 'operator');
divideBtn.setAttribute('value', '/');
const faDivide = document.createElement('i');
faDivide.classList.add('fas', 'fa-divide');
divideBtn.appendChild(faDivide);
keys.appendChild(divideBtn);

const percentBtn = document.createElement('button');
percentBtn.setAttribute('type', 'button');
percentBtn.setAttribute('class', 'operator');
percentBtn.setAttribute('value', '%');
const faPercent = document.createElement('i');
faPercent.classList.add('fas', 'fa-percentage');
percentBtn.appendChild(faPercent);
keys.appendChild(percentBtn);

const sqrtBtn = document.createElement('button');
sqrtBtn.setAttribute('type', 'button');
sqrtBtn.setAttribute('class', 'operator');
sqrtBtn.setAttribute('value', 'sqrt');
const faSqrt = document.createElement('i');
faSqrt.classList.add('fas', 'fa-square-root-alt');
sqrtBtn.appendChild(faSqrt);
keys.appendChild(sqrtBtn);

const squareBtn = document.createElement('button');
squareBtn.setAttribute('type', 'button');
squareBtn.setAttribute('class', 'operator');
squareBtn.setAttribute('value', 'sqr');
const faSqr = document.createElement('i');
faSqr.classList.add('fas', 'fa-superscript');
squareBtn.appendChild(faSqr);
keys.appendChild(squareBtn);

const sevenBtn = document.createElement('button');
sevenBtn.setAttribute('value', '7');
sevenBtn.innerText = '7';
keys.appendChild(sevenBtn);

const eightBtn = document.createElement('button');
eightBtn.setAttribute('value', '8');
eightBtn.innerText = '8';
keys.appendChild(eightBtn);

const nineBtn = document.createElement('button');
nineBtn.setAttribute('value', '9');
nineBtn.innerText = '9';
keys.appendChild(nineBtn);

const fourBtn = document.createElement('button');
fourBtn.setAttribute('value', '4');
fourBtn.innerText = '4';
keys.appendChild(fourBtn);

const fiveBtn = document.createElement('button');
fiveBtn.setAttribute('value', '5');
fiveBtn.innerText = '5';
keys.appendChild(fiveBtn);

const sixBtn = document.createElement('button');
sixBtn.setAttribute('value', '6');
sixBtn.innerText = '6';
keys.appendChild(sixBtn);

const oneBtn = document.createElement('button');
oneBtn.setAttribute('value', '1');
oneBtn.innerText = '1';
keys.appendChild(oneBtn);

const twoBtn = document.createElement('button');
twoBtn.setAttribute('value', '2');
twoBtn.innerText = '2';
keys.appendChild(twoBtn);

const threeBtn = document.createElement('button');
threeBtn.setAttribute('value', '3');
threeBtn.innerText = '3';
keys.appendChild(threeBtn);

const nullBtn = document.createElement('button');
nullBtn.setAttribute('value', '0');
nullBtn.innerText = '0';
keys.appendChild(nullBtn);

const decimalBtn = document.createElement('button');
decimalBtn.setAttribute('value', '.');
decimalBtn.setAttribute('class', 'decimal');
decimalBtn.innerText = '.';
keys.appendChild(decimalBtn);

const clearBtn = document.createElement('button');
clearBtn.setAttribute('value', 'all-clear');
clearBtn.setAttribute('class', 'all-clear');
clearBtn.innerText = 'AC';
keys.appendChild(clearBtn);

const equalBtn = document.createElement('button');
equalBtn.setAttribute('class', 'equal-sign');
equalBtn.setAttribute('value', '=');
const faEqual = document.createElement('i');
faEqual.classList.add('fas', 'fa-equals');
equalBtn.appendChild(faEqual);
keys.appendChild(equalBtn);

calculator.appendChild(keys);
container.appendChild(calculator);
body.appendChild(container);

const buttons = document.querySelectorAll('button');
buttonClick(buttons);