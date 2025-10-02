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
// console.log(loginusermessage());

// function calccartprice(...n1){
//     return n1
// }
function calccartprice(v1,v2,...n1){
    return n1
}
// console.log(calccartprice(200, 300, 400));
 const user = {

    username: "Jyotish",
    price: "199"
 }
 function handleobject(anyobject){
    console.log(`Username is ${ anyobject.username} and price is ${anyobject.price}`);
 }

//  handleobject(user)
handleobject({
    username: "Ravi",
    price: "50"
})

const myArr = [200,300,600,500]
function returnsecondvalue(getArray){
    return getArray[1]
}
// console.log(returnsecondvalue(myArr));
console.log(returnsecondvalue([200,400,500,1000]));
