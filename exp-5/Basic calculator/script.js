function calculate(operator){

    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result;

    if(operator == "+"){
        result = n1 + n2;
    }
    else if(operator == "-"){
        result = n1 - n2;
    }
    else if(operator == "*"){
        result = n1 * n2;
    }
    else if(operator == "/"){
        if(n2 == 0){
            result = "Cannot divide by zero";
        } else {
            result = n1 / n2;
        }
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}