// Append numbers/operators to display
function append(value) {
    var display = document.getElementById("display");

    if(display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear display
function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

// Calculate result
function calculate() {
    var display = document.getElementById("display");

    try {
        display.innerText = eval(display.innerText);
    }
    catch {
        display.innerText = "Error";
    }
}