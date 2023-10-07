const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// console.log(products);
function SignUp(username){
    let flag=true;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username){
            console.log("You already have an account please sign in using it");
            flag=false;
            
        }
    }
    if(flag){
        let obj=new Date();

    let name="Killer";
    let _id='gherdc';
    let password="hello";
    let email="cool@cool.com";
    let createdAt=obj.getDay()+"/"+obj.getMonth()+"/"+obj.getFullYear()+" "+obj.getHours()+":"+obj.getMinutes();
    let isLoggedIn=true;

    const person={
        _id:_id,
        username:username,
        email:email,
        password:password,
        createdAt:createdAt,
        isLoggedIn:isLoggedIn
    }
    users.push(person);

    }
   


}
// SignUp("Arpit");
// console.log(users[users.length-1]);

function SignIn(username,password){
    let flag=true;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            flag =false;
            console.log("welcome")
            
        }
    }
    if(flag){
        console.log("Please sign up");
    }



}
// SignIn("Thomas","123333");

function rateProduct(username,productname,rate){
    let flag=false;
    let _id=0;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username){
            flag =true;
            console.log("welcome");
            _id=users[i]._id;
            
        }
    }
    if(flag){
        for(let i=0;i<products.length;i++){
            if(products[i].name===productname){
                const new_ratings={
                    userId:_id,
                    rate:rate
                }
                products[i].ratings.push(new_ratings);
            }
        }

    }else{
        console.log("Please create an account");
    }


}
rateProduct("Killer","mobile phone",4);
console.log(products[0].ratings);
function likeProduct(username,productname){
    let flag=false;
    let _id=0;
    let index=0;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username){
            flag =true;
            console.log("welcome");
            _id=users[i]._id;
            index=i;
            
        }
    }
    if(flag){
        for(let i=0;i<products.length;i++){
            if(products[i].name===productname){
                if(products[i]["likes"].includes(users[index]["_id"])){
                    products[i]["likes"].splice(products[i]["likes"].indexOf(_id),products[i]["likes"].indexOf(_id));
                }else{
                    products[i]["likes"].push(_id);
                }
            }
        }

    }else{
        console.log("Please create an account");
    }

}
likeProduct("Thomas","TV");

console.log(products[products.length-1]["likes"]);
likeProduct("Thomas","TV");
console.log(products[products.length-1]["likes"]);