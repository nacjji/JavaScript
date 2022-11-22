// function solution(arr, divisor) {
//   let arr2 = [];
//   for (const i of arr) {
//     if (i % divisor === 0) {
//       arr2.push(i);
//     }
//   }

//   return console.log("a", arr2.sort());
//   if (arr2[0] === undefined) {
//     arr2.push(-1);
//     return console.log(arr2);
//   } else {
//     return console.log(arr2);
//   }
// }

// solution([10, 5, 15, 2, 3], 5);

// 5,10,15

// function solution(arr, divisor) {
//   let arr2 = [];
//   if (arr2 === []) {
//     arr2.push(-1);
//   }
//   return console.log(arr2);
// }

// solution([2, 3], 5);
// function solution(arr, divisor) {
//   let arr2 = [];
//   for (const i of arr) {
//     if (i % divisor === 0) {
//       arr2.push(i);
//     }
//   }
//   if (arr2[0] == undefined) {
//     arr2.push(-1);
//     return console.log(arr2);
//   } else {
//     arr2.sort((a, b) => a - b);
//     return console.log(arr2);
//   }
// }
// solution([10, 5, 15, 2, 3], 1);

// function solution(arr, divisor) {
//   let arr2 = [];
//   for (const i of arr) {
//     if (i % divisor === 0) {
//       arr2.push(i);
//     }
//   }
//   if (arr2[0] == undefined) {
//     arr2.push(-1);
//     return console.log(arr2);
//   } else {
//     arr2.sort();
//     return console.log(arr2);
//   }
// }
// solution([10, 5, 15, 2, 3], 1);

function solution(arr, divisor) {
  var answer = arr.filter((value) => value % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([1, 5, 2, 3, 11, 15], 5));
