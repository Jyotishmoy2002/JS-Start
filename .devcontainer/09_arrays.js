const marv_heroes = ["Thor","Hulk","SpiderMan"]
const dc_heroes = ["Batman","Superman","Flash"]
// marv_heroes.push(dc_heroes)
// console.log(marv_heroes);
// marv_heroes.concat(dc_heroes)
// console.log(marv_heroes);
// const all_heroes = marv_heroes.concat(dc_heroes)
// console.log(all_heroes);
const new_heroes = [...marv_heroes, ...dc_heroes]
// console.log(new_heroes);
const anoth_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_an_arr = anoth_arr.flat(Infinity)
console.log(real_an_arr);
console.log(Array.isArray("Jyotish"));
console.log(Array.from("Jyotish"));
console.log(Array.from({name: "Jyotish"})); // Interesting

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));
