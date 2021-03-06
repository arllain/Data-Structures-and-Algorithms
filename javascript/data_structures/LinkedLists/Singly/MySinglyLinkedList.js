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
    return this.printList();
  }

  // Adding a new node to the beginnig of the list
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.printList();
  }

  // Adding a new node in the index provided
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = node;
    node.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  // removing a node in the index provided
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  // traversing the linked list
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
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

  // reversing the linkedlist
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

export default MySinglyLinkedList;
