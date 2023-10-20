import {countries} from "./DATA/countries_data.js"
const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const get_price=(element,index,arr)=>{
    if(typeof element.price === 'number'){
        return element.price;
    }else{
        return 0;
    }
}
//1- Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const b=products.map(get_price).reduce((prev,cur)=>prev+cur,0);
console.log(b);
// 2-Find the sum of price of products using only reduce reduce(callback))
let sum=(acc,cur)=>{
    if(typeof cur.price === 'number'){
        return acc+cur.price;
    }else{
        return acc;
    }

}
let print=products.reduce(sum,0);
console.log(print);

// 3-Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries=(val,countries)=>{
    return countries.filter((element)=>{
        if( element.name.includes(val)){
            return element.name;
        }
    });


}
console.log(categorizeCountries("ia",countries).length);

// 4-Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const count_start=(char)=>{
    return {char:`${char}`,size:countries.filter((element)=>element.name.startsWith(char)).length};
}
let arr=[];
for(let char of alphabet){
    arr.push(count_start(char));
}
console.log(arr);
//5- Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries=()=>{
    return countries.slice(0,10);

}
console.log(getFirstTenCountries().length);

// 6-Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries=()=>{
    return countries.slice(countries.length-10,countries.length);
}
console.log(getLastTenCountries());
// 7-Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const find_max=()=>{
    let val="";
   let max= arr.reduce((acc,curr)=>{
        if(curr.size>acc){
            val=curr.char;
            return curr.size;
        }else{
            return acc;
        }
    },0);
    return [max,val];
}
console.log(find_max());
