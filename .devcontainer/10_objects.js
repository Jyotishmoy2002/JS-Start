// singleton
// Objecct.create

//object literals
const mySym = Symbol("mykey1")

const JsUser = {
    name: "Jyotish",
    "full name": "Jyotishmoy Narzary",
    [mySym]: "mykey1",
    age: 23,
    Locaton: "Biswanath",
    email: "j@gmail.com",
    isLoggedIn: false
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email = "jn@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "jn@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");  
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

