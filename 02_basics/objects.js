
const mysym = Symbol("ydv")

const jsuser ={
    name: "aalok",
    [mysym]: "mykey1",
    "full name ": "aalok yadav",
    age : 22,
    isloggedin: true,
}
// console.log(jsuser.name);
// console.log(jsuser["full name "]);
// console.log(jsuser[mysym]);

jsuser.age = 45
// Object.freeze(jsuser)
jsuser.age = 98
// console.log(jsuser["age"]);

// jsuser.greeting = function(){
//     console.log("hello jsuser welecome to world");
// }
// jsuser.greeting2 = function(){
//     console.log(`hello jsuser  ${this.name} welecome to world`);
// }
// console.log(jsuser.greeting2());
// jsuser.greeting()


const obj1 ={ a:2,b:52,c:70}
const obj2 ={ w:5,e:90,f:12}
const obj3 ={...obj1,...obj2}
console.log(obj3);
const users =[
    {
        id : 45,
        age : 23,

    },
    {
        id :89,
        age:26,

    }

]

// console.log(users[1].id);

// console.log(jsuser);
// console.log(Object.keys(jsuser));
// console.log(Object.values(jsuser));
// console.log(Object.entries(jsuser));
console.log(jsuser.hasOwnProperty('age'));
















