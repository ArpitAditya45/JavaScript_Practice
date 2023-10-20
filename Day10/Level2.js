
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// 1-Find a union b


let s1=new Set(a);
let s2=new Set(b);
let c=[...a,...b]
let s3=new Set(c);
console.log(s3);


// 2-Find a intersection b


let intersection=a.filter((ele)=>s2.has(ele));
console.log(intersection);


// 3-Find a with b


let diff=a.filter((ele)=>!s2.has(ele));
console.log(diff);
console.log(countries);