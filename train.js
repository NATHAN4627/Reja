const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

function giveAdvice(a, callback) {
  if (typeof a !== "number") callback("Enter numbers only", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
}

giveAdvice(21, (err, data) => {
  if (data) {
    console.log(data);
  } else {
    console.log("Error", err);
  }
});

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
