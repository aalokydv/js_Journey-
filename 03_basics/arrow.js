
const user ={
    username: "aalok",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);


    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()


// function chai(){
//     let username = "aalok"
//     console.log(this.username);
// }
// chai()
// function k ander this keyword use nhi hota  mainly object k ander hota hai

//arrow function 

// const addtwo = (num1 , num2)=> {
//     return num1+num2

// }

const addtwo = (num1 , num2)=>  num1+num2

const addTwo = (num1 , num2)=>  (num1+num2)



console.log(addTwo(3,4));