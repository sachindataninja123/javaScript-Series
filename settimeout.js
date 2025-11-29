const repeatedFunction = () => {
    console.log("This function repeats every 1000 milliseconds (1 second)" );

};

repeatedFunction();

const intervlID = setInterval(repeatedFunction, 1000);

setTimeout(() => {
    clearInterval(intervlID);
},5000)