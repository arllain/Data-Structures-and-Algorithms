import MyArray from "./data_structures/arrays/MyArray.js";
import ReverseString from "./algorithms/ReverseString.js";

const reverseString = new ReverseString();
const result = reverseString.reverse("This is a reversed string");
console.log(result.join(""));

// const myArray = new MyArray();
// myArray.push("hi");
// myArray.push("you");
// myArray.push("!");
// myArray.delete(0);
// myArray.push("are");
// myArray.push("nice");
// myArray.delete(1);
// console.log(myArray);
