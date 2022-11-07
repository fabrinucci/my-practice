class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 1;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {

    if(this.length === 0) {
      console.warn('No more elements in the queue')
      return this;
    }

    if(this.length === 1) {
      this.last = null;
      this.first = null
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Pepe');
myQueue.enqueue('Bebote');
myQueue.enqueue('Maria');