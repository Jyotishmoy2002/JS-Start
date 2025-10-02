//var c = 300
let a = 300
if(true){
let a = 10
const b = 20
// console.log("Inner:", a);

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Jyotish"
    function two(){
        const website = "Instagram"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true){
    const username = "Jyotish"
    if(username === "Jyotish"){
        const website = "Instagram"
        // console.log(username + website);
    }
}
/// +++++++++++ Interesting ++++++++++
function addone(value){
    return value+1
}
addone(5)

const addtwo = function addtwo(value){
    return value+2
}
addtwo(5)