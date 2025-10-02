function saymyname(){
    console.log("J");
    console.log("Y");
    console.log("O");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}
// function addtwonumbers(n1,n2){
//     console.log(n1+n2);
// }
function addtwonumbers(n1,n2){
    // let result = n1 + n2
    // return result
    return n1 + n2
}
const result = addtwonumbers(3, 5)
// console.log("Result: ",result);
// function loginusermessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return`${username} just logged in`
// }
function loginusermessage(username="Ravi"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginusermessage("Jyotish"));
console.log(loginusermessage());
