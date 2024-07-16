const name = "aalok"
const repoCount=78

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("subway surfers nayak sholey")
// console.log(gameName.charAt(3));

// console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
// console.log(newString);




////practise///////


// const arr =[56,445, "aalok" , "yadav" , 78]
// arr.splice(2,1)   // remove in middle of array
// arr.splice(2 , 0 ,3,56,89)   // add inmidlle of aray
// console.log(arr);
// const str = "   aalok   "
// console.log(str);
// console.log(str.trim());
// console.log(gameName.split(' '));
// console.log(gameName.slice(10 , 18));    // cut out the inbetween aaray from given two indexes
// // console.log(Array.from(gameName));     // convert the string into charcter array

let myobj1 = [
    { "no." :1 , "name" : "aalok"},
    {"no." :2 , "name" :"yadav"}
]

for(const key of myobj1){     /// for of loop for array 
    // console.log(key);
}

// const ans = myobj1.find((temp)=> temp.name==="yadav")    // find method for finding the object conatining name = aalok from array
// console.log(ans);

const ara = [23,45,87,34]
console.log(ara.map((i)=>i+1))      /// array.map function 


const myobj = {
    name : "aalok",
    age : 45,
    town : "narnaul"
}

for(const key in myobj){       /// for in loop for objects 
    // console.log(key ,myobj[key]);       
}

const myobj2={
    name : "sanjana"
}

const pree = {...myobj,...myobj2};   ///  spread operator to combine to objects into one
// console.log(pree);