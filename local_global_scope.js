const globalVariable = "I'm a global variable";

function myFunction() {
     const functionVariable = "I'm a function variable";

     if(true) {
        //Block scope
        const blockVariable = "I'm a block variable";
        console.log(blockVariable);
        console.log(functionVariable);
        console.log(globalVariable);
     }

    //  console.log(blockVariable); // throws Error
}

myFunction();