const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// forEach iterates on each element and returns a new array
//map takes and performs on array element
// filter as name suggests it filter out element that fulfill certain condition
// reduce -->quite difficult but works similar to recursion

// 3.Use forEach to console.log each country in the countries array.
function func(element) {
  console.log(element);
}
countries.forEach(func);

// 4 Use forEach to console.log each name in the names array

names.forEach(func);

// 5
numbers.forEach(func);

// 6 Use map to create a new array by changing each country to uppercase in the countries array.
const upper_case = (element) => {
  return element.toUpperCase();
};
const upper = countries.map(upper_case);
console.log(upper);

// 7.Use map to create an array of countries length from countries array.
function cal_len(element) {
  return element.length;
}
const length = countries.map(cal_len);
console.log(length);
// 8.Use map to create a new array by changing each number to square in the numbers array
function square(element) {
  return element * element;
}
const square_numbers = numbers.map(square);
console.log(square_numbers);
// 9.Use map to change to each name to uppercase in the names array

const upper_name = names.map(upper_case);
console.log(upper_name);

// 10 Use map to map the products array to its corresponding prices
const price = (element) => {
  return element.price;
};
const prices = products.map(price);
console.log(prices);

// 11 Use filter to filter out countries containing land.

const land = countries.filter((element) => {
  return element.toLowerCase().includes("land");
});
console.log(land);

// 12 Use filter to filter out countries having six character.
const six_char = (element) => {
  return element.length == 6;
};
const six = countries.filter(six_char);
console.log(six);
// 13 Use filter to filter out countries containing six letters and more in the country array.
const more_six_char = (element) => {
  return element.length > 6;
};
const more_six = countries.filter(more_six_char);
console.log(more_six);
// 14 Use filter to filter out country start with 'E';
const Start_E = (element) => {
  return element.startsWith("E");
};
let ans = countries.filter(Start_E);
console.log(ans);

// 15 Use filter to filter out only prices with values.

function filter_price(element) {
  if (element.price != " ") {
    return element.price;
  }
}
const price_1 = products.filter(filter_price);
console.log(price_1);

// 16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (coun) => {
  return coun.filter((val) => {
    return typeof val === "string";
  });
};
console.log(getStringLists(countries));

// 17 Use reduce to sum all the numbers in the numbers array.

let a = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(a);

// 18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

a =
  countries.reduce((acc, curr, ind) => {
    if (ind === countries.length - 1) {
      return acc + "and " + curr + " ";
    }
    return acc + curr + ",";
  }, " ") + "are north European countries";
console.log(a);
// 20-  Use some to check if some names' length greater than seven in names array
console.log(names.some((val) => val.length >= 7));
// 21 Use every to check if all the countries contain the word land
console.log(names.every((val) => val.includes("land")));
// 23  Use find to find the first country containing only six letters in the countries array
console.log(countries.find((val) => val.length === 6));
// 24- Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((val) => val.length === 6));
// 25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1
console.log(countries.findIndex((val) => val === "Norway"));
// 26-Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((val) => val === "Russia"));
