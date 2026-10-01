// function greetPerson(firstName, lastName) {
//   return `hello, ${firstName} ${lastName}`;
// }
// let output = greetPerson("John", "Doe");
// console.log(output);

// const array = [];
// const addToEnd = (arr, value) => {
//   arr.push(value);
//   return arr;
// };
// let updatedArray = addToEnd(array, 10);
// console.log(updatedArray);

// const numbers = [1, 2, 3, 4, 5, 6];
// const sumArray = (nums) => {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   return total;
// };
// console.log(sumArray(numbers));

// function findMax(nums) {
//   if (nums.length === 0) return null;

//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(numbers));

const fruits = ["apple", "banana", "cherry"]

const firstFruit = fruits.shift() 
console.log(firstFruit)
console.log(fruits)

fruits.unshift("mango", "kiwi");
console.log(fruits);

const numbers = [1, 2, 3];
const name = "Alex";

console.log(Array.isArray(numbers))
console.log(Array.isArray(name))

const nestedArray = [1, [2, 3], [4, [5, 6]]]

console.log(nestedArray.flat())

const colors = ["red", "green", "blue", "yellow", "purple"]
const favoriteColors = colors.slice(1, 4)
console.log(favoriteColors)
console.log(colors)