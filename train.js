// C TASK

function checkContent(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const res_str1 = str1.split("").sort().join();
  console.log(res_str1);
  const res_str2 = str2.split("").sort().join();
  console.log(res_str2);

  return res_str1 === res_str2;
}

console.log(checkContent("nodir123", "ridno321"));

// B TASK

// function countDigits(input) {
//   let count = 0;

//   for (let i = 0; i < input.length; i++) {
//     // nechta raqam borligini sanaydi aylanib, (!) borligi uchun, agar bolmasa string'ni sanaydi
//     if (!isNaN(input[i])) {
//       count++;
//     }
//   }

//   if (count === 0) {
//     console.log("There is no any numbers");
//   }
//   return count;
// }

// console.log(countDigits("dasdasd94736"));

//MIT TASK
// function countLetter(a, b) {
//   let count = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] === a) {
//       count++;
//     }
//   }

//   if (count === 0) {
//     console.log("There is no any letter here");
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));

// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// // CALLBACK FUNCTIONS

// function giveAdvice(a, callback) {
//   if (typeof a !== "number") callback("Enter numbers only", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function(){
//       callback(null, list[5]);
//     },1000)
//   }
// }

// giveAdvice(31, (err, data) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log("Error", err);
//   }
// });

//ASYNC FUNCTIONS

// async function giveAdvice(a) {
//   if (typeof a !== "number") throw new Error("Enter numbers only", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50)
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(list[3]);
//       }, 5000);
//     });
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//   }
// }

// console.log("0");

// async function get() {
//   return "Got advice";
// }

// async function run() {
//   let res = await giveAdvice(45);
//   console.log(res);
//   res = await get();
//   console.log(res);
// }
// console.log("1");

// run();

// CALCULATE NUMBERS

// function calculate(x, y, callback) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     callback("Enter numbers only!", null);
//     return;
//   } else {
//     return callback(x, y);
//   }
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log(calculate(5, 3, add));

// //console.log(calculate(5, 3, multiply));

// function calculate(x, y, callback) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     callback("Enter numbers only!", null);
//   } else {
//     callback(x, y);
//   }
// }

// function add(x, y) {
//   console.log(x + y);
// }

// function multiply(x, y) {
//   console.log(x * y);
// }

// calculate(5, 3, multiply);

//FIND EVEN NUMBERS

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function myFilter(num, callback) {
//   const res = [];
//   for (let i = 0; i < num.length; i++) {
//     if (callback(num[i])) {
//       res.push(num[i]);
//     } // else {
//     //   console.log("Error", null);
//     // }
//   }
//   return res;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }

// const evenNumbers = myFilter(numbers, isEven);
// console.log(evenNumbers);
