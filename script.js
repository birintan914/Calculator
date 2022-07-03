const calcDisplay = document.querySelector(".calculator-display")
const calcButtons = document.querySelectorAll(".calc-btn")
const calcOperators = document.querySelectorAll(".calc-operator")

let currNum = "";
let storedNum = "";
let operationMode = null;
let calcDot = false;

function operate(operation, a, b){
    if(operation=="plus"){
        return a+b;
    }
    else if(operation==="minus"){
        return a-b;
    }
    else if(operation==="multiply"){
        return a*b;
    }
    else if(operation==="divide"){
        return a/b;  
    }
}
function rgba(r, g, b, a){
    return "rgb("+r+","+g+","+b+","+a+")";
}
function resetOperatorSelected(){
    calcOperators.forEach(button => {
        button.style.backgroundColor = rgba(255,140,0,1);
        button.style.boxShadow = "0 0 0px black";
    })
}
function resetCalc(){
    calcDisplay.textContent = "";
    currNum = "";
    storedNum = "";
    calcDot = false;
}

calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains("calc-num") && currNum.length<12){ //Number Selected
            if(currNum==""){
                calcDisplay.textContent = currNum;
            }
            if(button.classList.contains("calc-dot") && calcDot==true){
                //pass
            }
            else{
                if(button.classList.contains("calc-dot")){
                    calcDot = true;
                    if(currNum.length==0){
                        currNum+="0";
                    }
                }
                currNum += button.value;
                calcDisplay.textContent = currNum;
            }
        }
        else if(button.classList.contains("calc-operator")){ //Operator Slected OR Equals
            if(currNum!=""){
                if(button.classList.contains("calc-equals")){
                    storedNum = operate(operationMode, Number(storedNum), Number(currNum))
                    currNum = ""
                    calcDisplay.textContent = storedNum;
                }
                else{
                    if(storedNum!=""){  //Complete the last operation
                        let msg = `${storedNum} ${operationMode} ${currNum} = ${operate(operationMode, Number(storedNum), Number(currNum))}`
                        storedNum = operate(operationMode, Number(storedNum), Number(currNum))
                        console.log(msg)
                    }
                    else {
                        storedNum = currNum;
                    }
                    currNum = ""
                    let msg = `OperationMode changing from ${operationMode} to ${button.value}`
                    operationMode = button.value;
                }
                resetOperatorSelected();
                button.style.backgroundColor = rgba(225,110,0,1);
                button.style.boxShadow = "0 0 3px black";
                }
            else{
                console.log("CurrNUm = null")
            }
        }
        else if(button.value=="AC"){
            resetCalc();
        }

    })
})