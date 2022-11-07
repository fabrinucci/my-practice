class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if( index >= this.length ) {
      console.warn('The position is greater than our id, we insert this value at the end of the array');
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    newNode.next = holdingPointer;
    firstPointer.next = newNode;

    this.length++;
    return this;
  }

  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while( counter !== index ) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  delete(index) {
    if( index === 0 ) return this.deleteFirst();
    if( index === this.length - 1 ) return this.deleteEnd();

    if( index >= this.length ) {
      console.warn('The id is not exists');
      return this;
    }

    const prevPointer = this.getIndex(index - 1);
    const nextPointer = this.getIndex(index + 1);
    prevPointer.next = nextPointer;
    this.length--
    return this;
  }

  deleteFirst() {
    this.head = this.getIndex(1)
    this.length--
    return this;
  }

  deleteEnd() {
    const prevPointer = this.getIndex(this.length - 2 )
    prevPointer.next = null;
    this.tail = prevPointer;
    this.length--
    return this;
  }

}

let myLinkedList = new MySingleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);