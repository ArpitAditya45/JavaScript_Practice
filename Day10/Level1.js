const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

// 1-create an empty set


const s = new Set();


// 2-Create a set containing 0 to 10 using loop


for (let i = 0; i <= 10; i++) {
  s.add(i);
}
console.log(s);


// 3-Remove an element from a set


s.delete(2); //Deletes the specific value not index
console.log(s);


// 4-Clear a set


s.clear();
console.log(s);


// 5-Create a set of 5 string elements from array


let arr = ["Hello", "Hi", "Bye", "cool", "dead"];
const t = new Set(arr);
console.log(t);


// 6-Create a map of countries and number of characters of a country


const map = new Map();
for (let ele of arr) {
  map.set(ele, ele.length);
}
console.log(map);
