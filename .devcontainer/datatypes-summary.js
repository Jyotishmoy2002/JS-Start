// Primitive

// 7 categories:String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference(non primitive)

// Array,Objects,Functions

const heroes = ["Shaktimaan","Naagraj","Doga"]
let myObj = {
    name : "Jyotish",
    age : 23,
}

const myFunction = function(){
    console.log("Hello World");  
}

console.log(typeof heroes);
// ++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive),Heap(Non Primitive)

let mygamename = "JyotishmoyNar"
let anothername = mygamename
anothername = "JSeries"
console.log(mygamename);

console.log(anothername)
let user = {
    email: "j@gmail.com",
    upi:  "j@ybl"
}
let userTwo = user
userTwo.email="jn@gmail.com"
console.log(user.email);
console.log(userTwo.email);

