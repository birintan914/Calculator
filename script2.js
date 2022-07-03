const calcDisplay = document.querySelector(".calculator-display")
const calcButtons = document.querySelectorAll(".calc-btn")
const calcOperators = document.querySelectorAll(".calc-operator")

let currNum = "";
let storedNum = "";
let operationMode = "";
let lastClicked = "";

window.addEventListener('keydown', (e) => {
    let regEx = /^[0-9]+$/
    if(regEx.test(e.key)){
        if(lastClicked=="operation") calcDisplay.textContent = "";
        lastClicked = "number"
        if(currNum.length<12){
            currNum+=e.key;
            calcDisplay.textContent = currNum;
        }
    }
    else if(e.key=="."){
        lastClicked = "dot";
        if(currNum.indexOf(".")==-1){
            if(calcDisplay.textContent.length==0){
                currNum+="0"
            }
            currNum+="."
            calcDisplay.textContent = currNum;
        }
    }
    else if(e.key=="enter"){
        lastClicked = "equals"
        if(currNum=="" || storedNum==""){
            //Pass
        }
        else {
            currNum = operate(storedNum, operationMode, currNum);
            storedNum = "";
            operationMode = "";
            calcDisplay.textContent = currNum;
        }
    }

})


calcButtons.forEach(button => {
    button.addEventListener('click', () => {

        if(button.classList.contains("calc-clear")){ //AC
            lastClicked = "AC"
            currNum = "";
            storedNum = "";
            operationMode = "";
            calcDisplay.textContent = currNum;
        }
        
        else if(button.classList.contains("calc-equals")){ //Equals
            lastClicked = "equals"
            if(currNum=="" || storedNum==""){
                //Pass
            }
            else {
                currNum = operate(storedNum, operationMode, currNum);
                storedNum = "";
                operationMode = "";
                calcDisplay.textContent = currNum;
            }
        }
        
        else if(button.classList.contains("calc-dot")){ //Dot
            lastClicked = "dot";
            if(currNum.indexOf(".")==-1){
                if(calcDisplay.textContent.length==0){
                    currNum+="0"
                }
                currNum+="."
                calcDisplay.textContent = currNum;
            }
        }
        //1) Check if there is an operationMode waiting to be operated and operate it
        //2) Store OperationPressed into the operationMode
        //3) What happens if you click an operater, then change it to something else. What happens if you click an operation then a number (no stored value)
        else if(button.classList.contains("calc-operator")){ //Operation
            lastClicked = 'operation'
            if(currNum!==""){
                if(operationMode===""){
                    operationMode = button.value
                    storedNum = currNum;
                    currNum = "";
                }
                else{
                    if(storedNum=="") console.log("FATAL ERROR: empty storedNum");
                    else {
                        storedNum = operate(storedNum, operationMode, currNum);
                        currNum = "";
                        calcDisplay.textContent = storedNum;
                    }
                }
            }
            else {
                console.log("ERROR: No value")
            }
            // 1)
                // - If currnum== "" dont do any opreation just change the operationMode
                // - Complete previous Operation
                // - change currNum to ""
            
            
        }
        
        else if(button.classList.contains("calc-negate")){ //Option
            lastClicked = 'option'
            currNum = Number(currNum)*-1;
            calcDisplay.textContent = currNum;

        }
        else if(button.classList.contains("calc-percent")){ //Option
            lastClicked = "option"
            currNum = operate(currNum, "divide", 100)
            calcDisplay.textContent = currNum;
        }
        
        else if(button.classList.contains("calc-num")){ //Number
            if(lastClicked=="operation") calcDisplay.textContent = "";
            lastClicked = "number"
            if(currNum.length<12){
                currNum+=button.textContent;
                calcDisplay.textContent = currNum;
            }

        }
        
        else {
            console.log("unknown")
        }
    })
})

function operate(a, operation, b){
    let answer = 0;
    let round = 0;
    if(operation=="plus"){
        answer = Number(a) + Number(b);
        if(answer.toString().length > 12){
            return Number(answer.toString().slice(0,13));
        }
        return answer;
    }
    else if(operation==="minus"){
        answer = a-b;
        if(answer.toString().length > 12){
            return Number(answer.toString().slice(0,13));
        }
        return answer;
    }
    else if(operation==="multiply"){
        answer = a*b;
        if(answer.toString().length > 12){
            return Number(answer.toString().slice(0,13));
        }
        return answer;
    }
    else if(operation==="divide"){
        answer = a/b;  
        if(answer.toString().length > 12){
            return Number(answer.toString().slice(0,13));
        }
        return answer;
    }
}
