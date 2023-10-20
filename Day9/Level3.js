import { countries } from "./DATA/countries_data.js";

// 1-Use the countries information, in the data folder. Sort countries by name, by capital, by population

let copy_country = new Object();
Object.assign(copy_country, countries);
const sort_by = (val) => {
  countries.sort((a, b) => {
    if (a[`${val}`] < b[`${val}`]) return -1;
    if (a[`${val}`] > b[`${val}`]) return 1;
    else return 0;
  });
};
console.log(sort_by("capital"));
console.log(sort_by("name"));
console.log(countries.sort((a, b) => a.population - b.population));
console.log(countries);

// 2-Find the 10 most spoken languages:

function mostSpokenLanguages(countries, num_of_values = 10) {
  let arr = [];
  for (let element of countries) {
    for (let lang of element.languages) {
      if (arr.indexOf(lang) === -1) {
        arr.push(lang); //If the language is not present add it
      }
    }
  }
  let country = [];
  for (let element of arr) {
    country.push({ country: element, count: 0 });
  } //Adding all the languages in the arr as an object
  for (let element of countries) {
    for (let lang of element.languages) {
      for (let val of country) {
        if (val.country === lang) {
          val.count = val.count + 1;
        }
      }
    }
  }

  country.sort((a, b) => b.count - a.count); //Sorting on the count value
  return country.slice(0, num_of_values);
}
console.log(mostSpokenLanguages(countries, 3));

// 3- Use countries_data.js file create a function which create the ten most populated countries

const populus = (countries, num_of_values = 10) => {
  let arr = [];
  countries.sort((a, b) => b.population - a.population);
  for (let val of countries) {
    if (num_of_values <= 0) {
      break;
    }
    arr.push({ country: val.name, population: val.population });
    num_of_values--;
  }
  return arr;
};
console.log(populus(countries, 3));
