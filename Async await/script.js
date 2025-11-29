//async function
async function getData() {
  //simulate getting data from the server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 5500);
  });
}
async function main() {
  console.log("Loading modules");
  console.log("Do something else");
  console.log("Load data");

  let data = await getData();
  console.log(data);

  console.log("Process data");
  console.log("Task 2");
}
main();
// data.then((v) =>{
//     console.log(data)
//     console.log("Process data")
//     console.log("Task 2")
// })
