//synchronous function
const fun1 = () => {
    console.log("Function 1 starts an ends");
};

const fun2 = () => {
    console.log("Function 2 Starts");
    fun1();
    console.log("Function 1 Ends here");
};

fun2();