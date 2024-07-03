
function loginusername(username ="rahul"){
    if(username==undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusername("ravi"));

 function calculatecarprice(...num1){
    return num1

 }
 console.log(calculatecarprice(100,200,7000));

 const user = {
    username: "aalokydv",
    price : 45,
 }

 function handleObjects(anyobjects){
    console.log(`username is ${anyobjects.username} and price is ${anyobjects.price}`);

 }
//  handleObjects(user)

 const mynewarray =[200,400,500,456]

 function returnsecondvalue(getarray){
    return getarray[1]

    
 }
//  console.log(returnsecondvalue([200,499,599,356]));