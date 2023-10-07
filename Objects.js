// const dog={};
// console.log(dog);
// dog["name"]="";
// dog["legs"]="";
// dog["color"]="";
// dog["age"]="";
// dog["bark"]=()=>{
//     return "Woof Woof!";

// }
// dog.name="Alice";
// dog.color="Brown";
// console.log(dog.bark());
// const key=Object.keys(dog);
// console.log(key);
// dog["breed"]="";
// dog.breed="pitbull";

// dog["getDogInfo"]=function(){
//     return `The dog is of breed ${this.breed} her name is ${this.name} her color is ${this.color}`;
// }
// console.log(dog);
// console.log(dog.getDogInfo())

//  Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let max = 0;
const func = (obj) => {
  let max = 0;
  let name = "";
  for (const prop in obj) {
    if (max < obj[prop].skills.length) {
      max = obj[prop].skills.length;
      name = prop;
    }
  }
  return [name, max];
};
const a = func(users);

function bool(obj) {
  let count = 0;
  for (const prop in obj) {
    if (obj[prop].isLoggedIn === true) {
      count += 1;
    }
  }
  console.log(count);
}
bool(users);

function number_mern_dev(obj){
   for (const key in obj) {
    let count=0;
    if(obj[key].skills.includes("MongoDB") && obj[key].skills.includes("Express") && obj[key].skills.includes('React') && obj[key].skills.includes("Node")){
      count=count+1;
      console.log(key);

    }
     
   }

}
number_mern_dev(users);
let obj={};
Object.assign(obj,users);
obj["Arpit"]={
  email:'cool@cool.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
  age:25,
  isLoggedIn:true,
  points:50
}
console.log(obj.Arpit);
console.log(users.Arpit);
