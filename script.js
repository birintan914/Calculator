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
        console.log(stack.items)
    }
}