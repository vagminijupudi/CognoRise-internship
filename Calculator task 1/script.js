let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid expression");
        }
        displayValue = result;
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "";
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}
