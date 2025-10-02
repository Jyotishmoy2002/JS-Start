const user = {
    username: "Jyotish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Ravi"
// user.welcomeMessage()
// console.log(this);
// function neew(){
//     let username = "Jyotish"
//     console.log(this.username);  
// }
// neew()
// const me = function(){
//     let username = "Jyotish"
//     console.log(this); 
// }
const me = () => {
    let username = "Jyotish"
    console.log(this); 
}
// me()
// const addtwo = (n1,n2) => {
//     return n1 + n2
// }
// const addtwo = (n1,n2) => n1 + n2
// const addtwo = (n1,n2) => (n1 + n2)
const addtwo = (n1,n2) => ({username: "Jyotish"})
console.log(addtwo(3,4));
