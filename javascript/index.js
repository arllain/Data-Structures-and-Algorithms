import MyArray from "./data_structures/arrays/MyArray.js";

const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.delete(0);
myArray.push("are");
myArray.push("nice");
myArray.delete(1);
console.log(myArray);
