function append(value){
    var display=document.getElementById("display");
    if(display.innerText=="0"){
        display.innerText=value;
    }else{
        display.innerText+=value;
    }
}

function clearDisplay(){
    document.getElementById("display").innerText="0";
}

function del(){
    var display=document.getElementById("display");
    display.innerText=display.innerText.slice(0,-1);
    if(display.innerText==""){
        display.innerText="0";
    }
}

function calculate(){
    var display=document.getElementById("display");
    try{
        display.innerText=eval(display.innerText);
    }
    catch{
        display.innerText="Error";
    }
}