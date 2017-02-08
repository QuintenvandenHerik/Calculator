var gRegister = document.getElementById("screen");
var gMAXLENGTH = 22;
var gNumber1 = 0;
var gOperator = "";
var gNumber2 = 0;
var gAnswer = 0;

//This function adds a new number to the register.
function addNumber(event) {
	console.log(event);
	if (gRegister.innerHTML === ".") {
	gRegister.innerHTML = "0.";
	}

	if (gRegister.innerHTML === "0") {
		gRegister.innerHTML = "";
	}

	if (gRegister.innerHTML.length < gMAXLENGTH) {
		gRegister.innerHTML = gRegister.innerHTML + event.target.innerHTML;
	}
	else {
		gRegister.innerHTML = "Too Much Numbers", gMAXLENGTH = 14;
	}
}

//This function is used to block the placement of the dot if there already is one in the register.
function addDot() {
	console.log(gRegister);
	var puntPosition = gRegister.innerHTML.indexOf(".");
	if (puntPosition == -1) {
		gRegister.innerHTML = gRegister.innerHTML + ".";
	}
}

//This function clears the register from any numbers and sets the register equal to 0.
function remove() {
	gRegister.innerHTML = 0;
	gMAXLENGTH = 22;
	gNumber1 = 0;
	gOperator = "";
	gNumber2 = 0;
	console.log(gOperator);
	console.log(gNumber1);
	console.log(gNumber2);
	console.log(gNumber2);
}

//This function adds the plus to the var gOperator and also removes the plus in the var gNumber1.
function OperatorsPlus() {
	var Plus = gRegister.innerHTML.indexOf("+");
	if (Plus === -1) {
		gOperator = "+";
		gRegister.innerHTML = gRegister.innerHTML + "+";
		gNumber1 = gRegister.innerHTML;
		gNumber1 = gNumber1.replace("+", "");
		gRegister.innerHTML = "0";
	}	console.log(gOperator);
	console.log(gNumber1);
	console.log(gNumber2);
}

//This function adds the min to the var gOperator and also removes the min in the var gNumber1.
function OperatorsMin() {
	var Min = gRegister.innerHTML.indexOf("-");
	if (Min === -1) {
		gOperator = "-";
		gRegister.innerHTML = gRegister.innerHTML + "-";
		gNumber1 = gRegister.innerHTML;
		gRegister.innerHTML = "0";
		gNumber1 = gNumber1.replace("-", "")
	}
	console.log(gOperator);
	console.log(gNumber1);
	console.log(gNumber2);
}

//This function adds the division to the var gOperator and also removes the division in the var gNumber1.
function OperatorsDeel() {
	var Deel = gRegister.innerHTML.indexOf("÷");
	if (Deel === -1) {
		gOperator = "÷";
		gRegister.innerHTML = gRegister.innerHTML + "÷";
		gNumber1 = gRegister.innerHTML;
		gRegister.innerHTML = "0";
		gNumber1 = gNumber1.replace("÷", "")
	}
	console.log(gOperator);
	console.log(gNumber1);
	console.log(gNumber2);
}

//This function adds the multiplyr to the var gOperator and also removes the multiplyr in the var gNumber1.
function OperatorsKeer() {
	var Keer = gRegister.innerHTML.indexOf("x");
	if (Keer === -1) {
		gOperator = "x";
		gRegister.innerHTML = gRegister.innerHTML + "x";
		gNumber1 = gRegister.innerHTML;
		gRegister.innerHTML = "0";
		gNumber1 = gNumber1.replace("x", "")
	}
	console.log(gOperator);
	console.log(gNumber1);
	console.log(gNumber2);
}

//This function remover the eqauls from var gNumber2 and searches for the good if statement to run using the var gOperator.
function OperatorsIs() {
	var IsPlus = gRegister.innerHTML.indexOf("=");
	if (IsPlus === -1) {
		gRegister.innerHTML = gRegister.innerHTML + "=";
		gNumber2 = gRegister.innerHTML;
		gNumber2 = gNumber2.replace("=", "");
		
		if (gOperator === "+") {
		gRegister.innerHTML = ((Number(gNumber1) * 10) + (Number(gNumber2) * 10))/10;
		}
		else {
			if (gOperator === "-") {
				gRegister.innerHTML = ((Number(gNumber1) * 10) - (Number(gNumber2) * 10))/10;
			}
			else {
				if (gOperator === "÷") {
					gRegister.innerHTML = ((Number(gNumber1) * 10) / (Number(gNumber2) * 10));
				}

				else {
					if (gOperator === "x") {
						gRegister.innerHTML = ((Number(gNumber1) * 10) * (Number(gNumber2) * 10))/10;
					}
				}
			}
		}
	}
	console.log(gOperator);
	console.log(gNumber1);
	console.log(gNumber2);
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
document.getElementById("buttonPlus").addEventListener("click", OperatorsPlus);
document.getElementById("buttonMin").addEventListener("click", OperatorsMin);
document.getElementById("buttonDeel").addEventListener("click", OperatorsDeel);
document.getElementById("buttonKeer").addEventListener("click", OperatorsKeer);
document.getElementById("buttonIs").addEventListener("click", OperatorsIs);
document.getElementById("dot").addEventListener("click", addDot);
document.getElementById("clear").addEventListener("click", remove);