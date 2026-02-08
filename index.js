
function addDisplay(val) {
    document.querySelector("input").value+=val;
}

function clearDisplay() {
    document.querySelector("input").value="";
}

function calculate() {
    try {
        document.querySelector("input").value=eval(document.querySelector("input").value);
    }catch(error) {
        document.querySelector("input").value="Error ";
    }
}

function del() {
    str=document.querySelector("input");
    str.value=str.value.slice(0,-1);
}