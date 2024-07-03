const arr = [1,2,4,6,8,3,6]

// const newnums = arr.filter((nums) => nums<4)
// console.log(newnums);


// const nenums = arr.filter((nums) => {
//     return nums<4})
// console.log(newnums);


const mynums =[]

arr.forEach((num) => {
    if(num>4){
        mynums.push(num)


    }
})

console.log(mynums);