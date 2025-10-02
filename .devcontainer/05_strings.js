const name = "Jyotish"
const repoCount = 50
// console.log(name + repoCount +"Value");
console.log(`hi my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Jyotishmoy-Nar') 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStr = gameName.slice(-13,2)
console.log(anotherStr);

const newStr = "   Jyotish   "
console.log(newStr);
console.log(newStr.trim());

const url = "https://Jyotishmoy%20Narzary"
console.log(url.replace('%20','-'));
console.log(url.includes('Jyotishmoy'));
console.log(gameName.split('-'));
