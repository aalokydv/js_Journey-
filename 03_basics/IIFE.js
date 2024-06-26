(function chai(){      //named iife
    console.log(`DB connected`);

})();

((name ) => {     //unnamed iife
    console.log(` ${name} , db is still running`);
})("aalok ydv");