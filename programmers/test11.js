// for 반복횟수를 정확히 알고 있을 때

// for (let i = 2; i < 10; i++) {
//   console.log(`${i}단`);
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log();
// }
// console.log(i);

// for (let i = 2; i < 10; i++) {
//   console.log(i);
//   for (let j = 1; j < 10; j++) {
//     console.log(j);
//   }
//   console.log();
// }
// while 반복횟수가 불규칙 적일때
// ----------------------------------------

// 1;
// 2;
// 3;
// 4;
// 5;

// for (let i = 0; i < 5; i++) {
//   console.log(`---i 반복문 : ${i}---`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`-j 반복문 : ${j}-`);
//     for (let k = 0; k < 5; k++) {
//       console.log(`k 반복문 : ${k}`);
//     }
//   }
// }

// function solution(n) {
//   let cnt = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n / i === i) {
//       return (i + 1) * (i + 1);
//     }
//   }
//   if (cnt === 0) {
//     return -1;
//   }
// }

// console.log(solution(1));

// function solu(n) {
//   n = String(n);
//   for (let i = n.length; i >= 0; i--) {
//     console.log(n[i]);
//   }
// }
// console.log(solu(46785));

function solution(n) {
  n = String(n);
  let a = [];
  for (let i = 0; i < n.length; i++) {
    a.push(n[i]);
  }
  a = a.reverse();
  let b = a.map((item) => {
    return parseInt(item);
  });
  return b;
}

// console.log(solution(24135));
// console.log([2, 4, 1, 3, 5].reverse());

// a.forEach((item) => {
//   console.log(item);
// });

// let fruit = a.map((item, index, array) => {
//   return item + " haha";
// });

// let fruit = a.filter((item) => {
//   return item.startsWith("a");
// });

// let fruit = a.some((item) => {
//   return item.length === 10;
// });

// let a = ["apple", "banana", "orange", "nacjji"];

// let fruit = a.find((item) => {
//   return item.includes("a");
// });

// let fruit = a.findIndex((item) => {
//   return item.startsWith("b");
// });

// console.log(fruit);

// function solution(arr) {
//   let li = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       li.push(arr[i]);
//     }
//   }
//   return li;
// }
