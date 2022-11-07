class Node {
  constructor(value) {
    this.value = value;
    this.prev = null
    this.next = null;
  }
}

class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    
    return this;
  }
}

let myLinkedList = new MySingleLinkedList(1);