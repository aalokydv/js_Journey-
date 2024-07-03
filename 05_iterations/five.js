const coding = ["js" ,"cpp","java","python"]
coding.forEach( function(val){
    // console.log(val);
})

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    console.log(item);

}

// coding.forEach(printMe)

const mycoding = [
    {
        language: "javascript",
        languagefilename : "js"
    },
    {
        language: "java",
        languagefilename : "java"
    },
    {
        language: "python",
        languagefilename : "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.language);
})