import {countries} from "../Day9/DATA/countries_data.js"
//1- How many languages are there in the countries object file.
const lang=new Set();
for(let val of countries){
    for(let lan of val.languages){
        lang.add(lan);
    }
}
console.log(lang.size);

// 2- Use the countries data to find the 10 most spoken languages:

const mostSpokenLanguage=(countries,num_val)=>{
    let arr=[];
    for(const l of lang){
        const val=countries.filter((element)=>element.languages.includes(l));
        arr.push({country:l,count:val.length});

    }

    arr.sort((a,b)=>b.count-a.count);
    return arr.slice(0,num_val);

}
console.log(mostSpokenLanguage(countries,10));