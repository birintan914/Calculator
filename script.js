//Stacks Implementation:
class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if(this.items.length <= 0){
            return "underflow"
        }
        return this.items.pop()
    }

    peek() {
        if(this.items.length <= 0){
            return "Empty List"
        }
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }

    log() {
        console.log(this.items)
    }
}

// Helper Functions:
function infixToPostfix(expression){
    let stack = new Stack();
    stack.push("#")
    let postfix = ""
    for(let curr of expression){
        if(isOperand(curr)){
            postfix += curr
        }
        else if(curr == "(") {
            stack.push(curr)
        }
        else if(curr == ")"){
            while(stack.peek() !="("){
                postfix += stack.pop()
            }
            stack.pop()
        }
        else if(order(curr) <= order(stack.peek())){
            while(order(curr) <= order(stack.peek())){
                postfix += stack.pop()
            }
        }
        else {
            stack.push(curr)
        }
    }
    while(stack.peek()!="#"){
        postfix += stack.pop()
    }
    return postfix
}

console.log(infixToPostfix("(2+3)^4/5"))

function validateKey(curr){

}

function isOperand(c){
    return ((c>='0')&&(c<='9'))
}

function order(c){
    if(c=="^"){
        return 3
    }
    else if ((c=="*") || (c=="/")){
        return 2
    }
    else if ((c=="+") || (c=="-")){
        return 1
    }
    else if((c=="#")||c=="("){
        return 0
    }
    else {
        console.log("Error Unknown Operator: ", c)
        return -1
    }
}