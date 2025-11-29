// //for only resolve

// function orderFood() {
//     return new Promise((resolve) => {
//         console.log("placing order...");

//         setTimeout(() => {
//             resolve("food is ready")
//         },2000);
//     });
// }

// async function haveDinner() {
//     let result = await orderFood();
//     console.log(result);
//     console.log("Eating the food");
// }

// haveDinner();

//now for both resolve and reject
function orderFood() {
    return new Promise((resolve , reject) => {
        console.log("Placing order...");

        setTimeout(() => {
            isKitchenBurnt = false;
            if(isKitchenBurnt) {
                resolve("food is ready");
            } else{
                reject("Kitchen Fire ! No food Today");
            }
            
        }, 2000);
    });
}
async function haveDinner() {
    try{
    let result = await orderFood();
    console.log(result);
    console.log("Eating the food");
    } catch (error) {
        console.log("Sometimes went Wrong :" ,error);
    }
} 
haveDinner();