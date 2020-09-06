import Node from "./Node.js";

class MySinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Adding a new node to the end of the list
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  // Adding a new node to the beginnig of the list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  // Printing the linkedList
  printList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode != null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list.join(" => "));
  }
}

export default MySinglyLinkedList;
