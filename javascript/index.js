// import MyArray from "./data_structures/Array/MyArray.js";
// import ReverseString from "./algorithms/ReverseString.js";
//import MyHashTable from "./data_structures/HashTable/MyHashTable.js";
//import FirstRecurringCharacter from "./algorithms/FirstRecurringCharacter.js";
import MySinglyLinkedList from "./data_structures/LinkedLists/Singly/MySinglyLinkedList.js";

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

const myLinkedList = new MySinglyLinkedList(10);
//console.log(myLinkedList);
myLinkedList.append(5);
//console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);
