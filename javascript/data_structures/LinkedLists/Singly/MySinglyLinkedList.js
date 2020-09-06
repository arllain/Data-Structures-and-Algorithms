import Node from "./Node.js";

class MySinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }
}

export default MySinglyLinkedList;
