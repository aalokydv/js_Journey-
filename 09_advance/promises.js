new Promise(function(resolve , reject){
    setTimeout(function(){
        // console.log("asyn is done")
        resolve()
    },2000)
    
}).then(function(){
    // console.log("all shoot");
})

const prmisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "aalokydv" , password:"aalok2801"})
        }else{
            reject('error is here hurrreehhhhh')
        }

    },2000)
})
prmisetwo
.then(function(user){
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log("error is here");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript" , password:"aalok2801"})
        }else{
            reject('something went wrong')
        }

    },3000)
})


async function  consumerpromisethree(){
    try {
        const response = await promisethree
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }

}
consumerpromisethree()



async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/aalokydv')
        const data = await response.json()
        console.log(data);

        
    } catch (error) {
    
        console.log("E: ", error );
        
    }
}
getAllUsers()


