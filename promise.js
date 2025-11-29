// Promises
// 1 Example
// var ans = new Promise((resolve, reject) => {
//   if(false) {
//     return resolve();
//   } else {
//     return reject();
//   }
// })
// ans
// .then(function () {
//   console.log("resolve ho gya");
// })
// .catch(() => {
//   console.log("reject ho gya")
// })

//Example 2.. question if a user tell you input number randomly 1 to 9 according to number if number is greatest from 5 then resolve else reject

// const ans = new Promise((res, rej) => {
//   var num = Math.floor(Math.random() * 10);
//   console.log(num);

//   if (num > 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// ans
//   .then(function () {
//     console.log("resolve");
//   })
//   .catch(function () {
//     console.log("reject");
//   });

// Example 3 : you have many list of works and print in orderwise by async then the task is
// ghar jao aur phir aao
// gate kholo and gate lagao
// khana khao aur mobile chalo
// phir insta pe video upload karo
// phir so jao

var ans = new Promise((res, rej) => {
  return res("ghar jao phir aao");
});
var p2 = ans.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Gate kholo and gate lagao");
  });
});
var p3 = p2.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Khana khao aur mobile chalao");
  });
});
var p4 = p3.then((data) => {
  console.log(data);
  return new Promise((res, rej) => {
    return res("Phir insta pe video upload karo");
  });
});
var p5 = p4.then((data) => {
  console.log(data);
  return new Promise((res , rej) => {
    return res("Phir so jao");
  })
})
p5.then((data) => {
  console.log(data);
})



//4nd Example
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey, I miss You!");
//     // reject("sorry ! I can't");
//   }, 2000);
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Don't Worry, I always miss you and keep smiling");
//   });

// 5rd EXAMPLE
// let studentName = "Ammu";

// const enrollStudent = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.5;
//       console.log(isSuccessful);
//       if (isSuccessful) {
//         resolve(`Enrollment success for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. please try again!`);
//       }
//     }, 3000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });
