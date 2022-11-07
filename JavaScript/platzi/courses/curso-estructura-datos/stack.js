class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.length === 0) {
      console.warn('No more elements in the stack')
      return this;
    }

    if(this.length === 1) {
      this.bottom = null;
      this.top = null
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('Pepe');
myStack.push('Ariana');