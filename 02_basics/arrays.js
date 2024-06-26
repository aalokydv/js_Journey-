const myarr =[1,4 ,7,5,8]
// console.log(myarr[3]);

// myarr.push(8)
// myarr.push(89)
// console.log(myarr);

// myarr.pop()
// console.log(myarr);

// console.log(myarr.length);

const marvel_heros =["ironman","spiderman" ,"antman"]
const dc_heros =["batman" ,"superman"]

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
const all_hero= [...marvel_heros,...dc_heros]
// console.log(all_hero);

console.log(Array.from("aalok yadav"));
console.log(Array.from({name : "aalok"}));

let score1 = 100
let score2 = 102
let score3 = 103

console.log(Array.of(score1,score2,score3));