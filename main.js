var display = document.querySelector("textarea#display");

var number = "";
var terms = [undefined, undefined, undefined];
var equal = undefined;


function pressNumber(num){
	
	if (number == "" && num.innerHTML == ".") {
		number = "0";
		showDisplay(number);	

	}

	number += num.innerHTML;

	showDisplay(num.innerHTML);
	
} 

function pressOperations(op){
	
	if (terms[1] == undefined) {
		
		terms[0] = number;
		terms[1] = op.innerHTML;

		showDisplay(terms[1]);
		number = "";
		cont -= 1;
		

	}
}

function pressEqual(){
	
	if (terms[0] != undefined && terms[1] != undefined && number != "") {
		terms[2] = number;

		switch(terms[1]){
			case "+":
				equal = Number(terms[0]) + Number(terms[2]);
				break;
			
			case "-":
				equal = Number(terms[0]) - Number(terms[2]);
				break;

			case "x":
				equal = Number(terms[0]) * Number(terms[2]);
				break;

			case "/":
				equal = Number(terms[0]) / Number(terms[2]);
				break;
			
			default:
				equal = "Erro";
			
		}

		clearAll();

		showDisplay(equal);

		number = equal;


	}

}

function showDisplay(content){
 	display.value += content;
}

function clearAll(){
	display.value = "";

	number = "";
	terms = [undefined, undefined, undefined];

	
}

/*function clearMemory(){
	display.value = "";

	clearMemory();
}*/