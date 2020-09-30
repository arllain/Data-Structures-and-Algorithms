// import MyArray from "./data_structures/Array/MyArray.js";
// import ReverseString from "./algorithms/ReverseString.js";
//import MyHashTable from "./data_structures/HashTable/MyHashTable.js";
//import FirstRecurringCharacter from "./algorithms/FirstRecurringCharacter.js";
//import MySinglyLinkedList from "./data_structures/LinkedLists/Singly/MySinglyLinkedList.js";
//import MyDoublyLinkedList from "./data_structures/LinkedLists/doubly/MyDoublyLinkedList.js";
//import Stack_LinkedList from "./data_structures/Stack/using_linked_list/Stack.js";
//import Stack_Array from "./data_structures/Stack/using_array/Stack.js";
//import Queue_LinkedList from "./data_structures/Queue/using_linkedlist/Queue.js";
//import Queue_Stack from "./data_structures/Queue/using_stack/Queue.js";
import BinarySearchTree from "./data_structures/Trees/BinarySearchTree/BinarySearchTree.js";
//import Graph from "./data_structures/Graph/Graph.js";
//import Factorial from "./algorithms/recursion/Factorial.js";
//import Fibonacci from "./algorithms/recursion/Fibonacci.js";
//import BubbleSort from "./algorithms/Sorting/BubbleSort.js";
//import SelectionSort from "./algorithms/Sorting/SelectionSort.js";
//import InsertionSort from "./algorithms/Sorting/InsertionSort.js";
//import MergeSort from "./algorithms/Sorting/MergeSort.js";
//import QuickSort from "./algorithms/Sorting/QuickSort.js";

// const myArray = new MyArray();
// myArray.push("hi");
// myArray.push("you");
// myArray.push("!");
// myArray.delete(0);
// myArray.push("are");
// myArray.push("nice");
// myArray.delete(1);
// console.log(myArray);

// const reverseString = new ReverseString();
// const result = reverseString.reverse("This is a reversed string");
// console.log(result.join(""));

// const myHashTable = new MyHashTable(50);
// myHashTable.set("grapes", 1000);
// myHashTable.set("apples", 54);
// myHashTable.set("oranges", 10);
// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("apples"));
// console.log(myHashTable.get("oranges"));

// const firstRecurringCharacter = new FirstRecurringCharacter();
// const array = [2, 5, 5, 2, 3, 5, 1, 2, 4];
// console.log(firstRecurringCharacter.firstRecurringCharacter_worstCase(array));
// console.log(firstRecurringCharacter.firstRecurringCharacter_bestCase(array));

// const myLinkedList = new MySinglyLinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(4);
// myLinkedList.remove(2);
// myLinkedList.reverse();

// const myDoublyLinkedList = new MyDoublyLinkedList(10);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(1, 99);
// myDoublyLinkedList.insert(20, 88);
// myDoublyLinkedList.remove(4);
// myDoublyLinkedList.remove(2);

// const stack_LinkedList = new Stack_LinkedList();
// stack_LinkedList.push("google");
// stack_LinkedList.push("udemy");
// stack_LinkedList.push("discord");
// stack_LinkedList.peek();
// console.log(stack_LinkedList.pop());
// console.log(stack_LinkedList.pop());
// console.log(stack_LinkedList.pop());
// console.log(stack_LinkedList.peek());

// const stack_array = new Stack_Array();
// stack_array.push("google");
// stack_array.push("udemy");
// stack_array.push("discord");
// console.log(stack_array);
// console.log(stack_array.pop());

// const queue_LinkedList = new Queue_LinkedList();
// console.log(queue_LinkedList.peek());
// console.log(queue_LinkedList.enqueue("Joy"));
// console.log(queue_LinkedList.enqueue("Matt"));
// console.log(queue_LinkedList.enqueue("Pavel"));
// console.log(queue_LinkedList.enqueue("Samir"));
// console.log(queue_LinkedList.dequeue());
// console.log(queue_LinkedList.dequeue());
// console.log(queue_LinkedList.dequeue());
// console.log(queue_LinkedList.dequeue());

// const queue_Stack = new Queue_Stack();
// console.log(queue_Stack.peek());
// console.log(queue_Stack.enqueue("Joy"));
// console.log(queue_Stack.enqueue("Matt"));
// console.log(queue_Stack.enqueue("Pavel"));
// console.log(queue_Stack.peek());
// console.log(queue_Stack.dequeue());
// console.log(queue_Stack.dequeue());
// console.log(queue_Stack.dequeue());
// console.log(queue_Stack.peek());

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(9);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(20);
binarySearchTree.insert(170);
binarySearchTree.insert(15);
binarySearchTree.insert(1);
console.log(JSON.stringify(binarySearchTree.lookup(9)));
//binarySearchTree.remove(170);
//console.log(JSON.stringify(traverse(binarySearchTree.root)));
console.log(JSON.stringify(binarySearchTree.breadthFirstSearch()));

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("5", "6");

// console.log(myGraph);

// const factorial = new Factorial();
// let answer = factorial.findFactorialInteractive(5);
// console.log(answer);
// answer = factorial.findFactorialRecursive(5);
// console.log(answer);

// const fibonacci = new Fibonacci();
// let answer = fibonacci.fibonacciRecursive(43);
// console.log(answer);
// answer = fibonacci.fiibonacciInteractive(43);
// console.log(answer);

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const bubbleSort = new BubbleSort();
// console.log(bubbleSort.sort(numbers));
// const selectionSort = new SelectionSort();
// console.log(selectionSort.sort(numbers));
// const mergeSort = new MergeSort();
// console.log(mergeSort.sort(numbers));

// const quickSort = new QuickSort();
// console.log(quickSort.sort(numbers, 0, numbers.length - 1));
