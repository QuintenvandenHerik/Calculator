var register = document.getElementById("screen");
var operatorPlus = document.getElementById("buttonPlus");
var operatorMin = document.getElementById("buttonMin");
var operatorDeel = document.getElementById("buttonDeel");
var operatorKeer = document.getElementById("buttonKeer");
var MAXLENGTH = 22;
var number1 = 0;
var operator = "";
var number2 = 0;
var answer = 0;

function addNumber(event) {
	console.log(event);
	if (register.innerHTML === ".") {
	register.innerHTML = "0.";
	}

	if (register.innerHTML === "0") {
		register.innerHTML = "";
	}

	if (register.innerHTML.length < MAXLENGTH) {
		register.innerHTML = register.innerHTML + event.target.innerHTML;
	}
	else {
		register.innerHTML = "Too Much Numbers", MAXLENGTH = 14;
	}
}


function addDot() {
	console.log(register);
	var puntPosition = register.innerHTML.indexOf(".");
	if (puntPosition == -1) {
		register.innerHTML = register.innerHTML + ".";
	}
}

function remove() {
	register.innerHTML = 0;
	MAXLENGTH = 22;
	number1 = 0;
	operator = "";
	number2 = 0;
	console.log(operator);
	console.log(number1);
	console.log(number2);
	console.log(number2);
}

function operatorsPlus() {
	var Plus = register.innerHTML.indexOf("+");
	if (Plus === -1) {
		operator = "+";
		register.innerHTML = register.innerHTML + "+";
		number1 = register.innerHTML;
		number1 = number1.replace("+", "");
		register.innerHTML = "0";
	}	console.log(operator);
	console.log(number1);
	console.log(number2);
}

function operatorsMin() {
	var Min = register.innerHTML.indexOf("-");
	if (Min === -1) {
		operator = "-";
		register.innerHTML = register.innerHTML + "-";
		number1 = register.innerHTML;
		register.innerHTML = "0";
		number1 = number1.replace("-", "")
	}
	console.log(operator);
	console.log(number1);
	console.log(number2);
}

function operatorsDeel() {
	var Deel = register.innerHTML.indexOf("÷");
	if (Deel === -1) {
		operator = "÷";
		register.innerHTML = register.innerHTML + "÷";
		number1 = register.innerHTML;
		register.innerHTML = "0";
		number1 = number1.replace("÷", "")
	}
	console.log(operator);
	console.log(number1);
	console.log(number2);
}

function operatorsKeer() {
	var Keer = register.innerHTML.indexOf("x");
	if (Keer === -1) {
		operator = "x";
		register.innerHTML = register.innerHTML + "x";
		number1 = register.innerHTML;
		register.innerHTML = "0";
		number1 = number1.replace("x", "")
	}
	console.log(operator);
	console.log(number1);
	console.log(number2);
}

function operatorsIs() {
	var IsPlus = register.innerHTML.indexOf("=");
	if (IsPlus === -1) {
		register.innerHTML = register.innerHTML + "=";
		number2 = register.innerHTML;
		number2 = number2.replace("=", "");
		
		if (operator === "+") {
		register.innerHTML = +(Number(number1) + Number(number2)).toFixed(1);
		}
		else {
			if (operator === "-") {
				register.innerHTML = +(Number(number1) - Number(number2)).toFixed(1);
			}
			else {
				if (operator === "÷") {
					register.innerHTML = Number(number1) / Number(number2);
				}

				else {
					if (operator === "x") {
						register.innerHTML = Number(number1) * Number(number2);
					}
				}
			}
		}
	}
	console.log(operator);
	console.log(number1);
	console.log(number2);
}


document.getElementById("button1").addEventListener("click", addNumber);
document.getElementById("button2").addEventListener("click", addNumber);
document.getElementById("button3").addEventListener("click", addNumber);
document.getElementById("button4").addEventListener("click", addNumber);
document.getElementById("button5").addEventListener("click", addNumber);
document.getElementById("button6").addEventListener("click", addNumber);
document.getElementById("button7").addEventListener("click", addNumber);
document.getElementById("button8").addEventListener("click", addNumber);
document.getElementById("button9").addEventListener("click", addNumber);
document.getElementById("button0").addEventListener("click", addNumber);
document.getElementById("buttonPlus").addEventListener("click", operatorsPlus);
document.getElementById("buttonMin").addEventListener("click", operatorsMin);
document.getElementById("buttonDeel").addEventListener("click", operatorsDeel);
document.getElementById("buttonKeer").addEventListener("click", operatorsKeer);
document.getElementById("buttonIs").addEventListener("click", operatorsIs);
document.getElementById("dot").addEventListener("click", addDot);
document.getElementById("clear").addEventListener("click", remove);