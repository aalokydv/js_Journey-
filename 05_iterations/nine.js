const mynums = [1,2,3,4,5,6,7,8,9,10]

const hh = mynums.map((num) => num+1).filter((num) => num>5)

console.log(hh);

const hhs = new Map()

hhs.set('aalok ' , 'mandhana')
hhs.set('sanjana' , ' mandhana')
hhs.set('roll' , '78')

for (const [key , value] of hhs) {
    console.log(key ,'=>', value);
    
}


const arr =[1,2,3 , 78 ,54 ,65 ,99]

const mytotal = arr.reduce((acc , currval) => {
    console.log(`acc:- ${acc} and currval:- ${currval}`);
    return acc+currval
},0)
console.log(mytotal);

const mytotal1 = arr.reduce((acc , currval) => (acc+currval),0)
console.log(`total amount of products => ${mytotal1} `);


const shoopingCart =[
    {itemName : "facewash",
     price: 399   
    },
    {itemName : "notebook",
        price: 200  
    },
    {itemName : "table",
        price: 1200  
    }
]

const totalPrice = shoopingCart.reduce((acc , item) => acc+item.price,0)
console.log(totalPrice);



















