// Connect calcButton
var calcButton = document.getElementById("calcButton");

// Declare calcEquation function
function calcEquation() {
	// Connect parameters
	var val1 = parseFloat(document.getElementById("val1").value);
	var val2 = parseFloat(document.getElementById("val2").value);
	var equalVal = parseFloat(document.getElementById("equalVal").value);
	var operator = document.getElementById("operator").value;
	var index = parseFloat(document.getElementById("index").value);
	var indexName = document.getElementById("indexName").value;

	// Declare result
	var result;

	// Checker for null value
	if (!val1) {
		// Display error & return null
		document.getElementById("eText").textContent = "Please insert value on Value 1";
        return null;   
    } else if (!val2) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Value 2";
        return null;   
    } else if (!operator) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please pick an value on Operator";
        return null;   
    } else if (!equalVal) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Equal Value";
        return null;   
    } else if (!index) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Index";
        return null;   
    } else if (!indexName) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Index Name";
        return null;
    } else {
    	// Checker for operator
        if (operator === "plus") {
        	// Checker for index
            if (index === 1) {
            	// Checker for value
            	if (val2 > 0) {
            		// Set result value
            		result = (equalVal - Math.abs(val2)) / val1;
            	} else {
            		// Set result value
            		result = (equalVal + Math.abs(val2)) / val1;
            	}
            	// Display Question
            	document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " = " + equalVal + "<br>";
            } else if (index === 2) {
            	// Checker for value
            	if (val1 > 0) {
            		// Set result value
            		result = (equalVal - val1) / Math.abs(val2);
            	} else {
            		// Set result value
            		result = (equalVal + Math.abs(val1)) / Math.abs(val2);
            	}
            	// Display Question
            	document.getElementById("rText").innerHTML = "Question : " + val1 + " + " + Math.abs(val2) + indexName + " = " + equalVal + "<br>";
            } else {
            	// Display error & return null
            	document.getElementById("eText").textContent = "Please choose an aviable index (1 & 2)";
            	return null;
            }
        } else if (operator === "min") {
        	// Checker for index
            if (index === 1) {
            	// Checker for value
            	if (val2 > 0) {
            		// Set result value
            		result = (equalVal - Math.abs(val2)) / val1;
            	} else {
            		// Set result value
            		result = (equalVal + Math.abs(val2)) / val1;
            	}
            	// Display Question
            	document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " - " + Math.abs(val2) + " = " + equalVal + "<br>";
            } else if (index === 2) {
            	// Checker for value
            	if (val1 > 0) {
            		// Set result value
            		result = (equalVal - val1) / Math.abs(val2);
            	} else {
            		// Set result value
            		result = (equalVal + Math.abs(val1)) / Math.abs(val2);
            	}
            	// Display Question
            	document.getElementById("rText").innerHTML = "Question : " + val1 + " - " + Math.abs(val2) + indexName + " = " + equalVal + "<br>";
            } else {
            	// Display error & return null
            	document.getElementById("eText").textContent = "Please choose an aviable index (1 & 2)";
            	return null;
            }
        } else {
        	// Display error & return null
        	document.getElementById("eText").textContent = "Please choose an aviable operator (Plus & Min)";
            return null;
        }
    }
    // Display result
    document.getElementById("rText").innerHTML += "Result : " + indexName + " = " + result;
}
// Add Event Listener on calcButton
calcButton.addEventListener("click", calcEquation);
