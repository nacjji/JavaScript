function solution(arr1, arr2) {
  let newArr = [];
  let result1 = [];
  if (arr1[0].length != 1) {
    for (let j = 0; j < arr1.length; j++) {
      for (let i = 0; i < arr1[0].length; i++) {
        newArr.push(arr1[j][i] + arr2[j][i]);
      }
    }
    newArr = [newArr];
    let newArr1 = newArr[0].slice(0, newArr[0].length / 2);
    let newArr2 = newArr[0].slice(newArr[0].length / 2, newArr[0].length);
    result1 = [newArr1, newArr2];
    return console.log(result1);
  } else {
    newArr.push(arr1[0][0] + arr2[0][0]);
    newArr.push(arr1[1][0] + arr2[1][0]);
    newArr = [newArr];
    let newArr1 = newArr[0].slice(0, 1);
    let newArr2 = newArr[0].slice(1);
    result1 = [newArr1, newArr2];
    return console.log(result1);
  }
}
// solution([2, 4, 3, 1, 4, 5, 6, 7, 8], [3, 5, 6, 3, 2, 5, 7, 9, 5]);

solution([[1], [2]], [[3], [4]]);

// [[6,8],[10,12]]

// newArr[0] = arr1[0][0] + arr2[0][0];
// newArr[1] = arr1[1][1] + arr2[1][1];

// let arr1 = [
//   [1, 3],
//   [3, 4],
// ];
// let arr2 = [
//   [5, 6],
//   [7, 8],
// ];
// let newArr = [];
// let result = [];

// for (let j = 0; j < arr1.length; j++) {
//   if (arr1[1].length != 1) {
//     for (let i = 0; i < arr1.length; i++) {
//       newArr.push(arr1[j][i] + arr2[j][i]);
//       result[0] = [newArr][0].slice(0, newArr.length / 2);
//       result[1] = [newArr][0].slice(newArr.length / 2);
//     }
//   } else {
//     newArr.push(arr1[j][0] + arr2[j][0]);
//     console.log(newArr);

//     result[0] = [newArr][0].slice(0, 1);
//     result[1] = [newArr][0].slice(1);
//   }

// let arr1 = [[1], [3]];
// let arr2 = [[3], [5]];
// // }
// // console.log(result);

// let newArr = [];
// let result = [];
// if (arr1[1].length != 1) {
//   for (let j = 0; j < arr1.length; j++) {
//     for (let i = 0; i < arr1[0].length; i++) {
//       newArr.push(arr1[j][i] + arr2[j][i]);
//     }
//   }
//   newArr = [newArr];
//   let newArr1 = newArr[0].slice(0, newArr[0].length / 2);
//   let newArr2 = newArr[0].slice(newArr[0].length / 2, newArr[0].length);
//   console.log([newArr1, newArr2]);
// } else {
//   for (let i = 0; i < 2; i++) {
//     newArr.push(arr1[i][0] + arr2[i][0]);
//   }
//   newArr = [newArr];
//   let newArr1 = newArr[0].slice(0, 1);
//   let newArr2 = newArr[0].slice(1);
//   console.log([newArr1, newArr2]);
// }

// newArr = newArr.split(newArr.length / 2, newArr.length);

// let second = newArr[0].slice(newArr[0].length / 2, newArr[0].length);
// let first = newArr[0].slice(0, newArr[0].length / 2);

// result = [first, second];

// console.log(result);

// let arr1 = [
//   [1, 2, 3, 4, 69, 3, 2],
//   [2, 6, 3, 2, 7, 9, 3],
// ];
// let arr2 = [
//   [5, 3, 2, 6, 89, 4, 2],
//   [3, 67, 3, 2, 7, 9, 4],
// ];

// let newArr = [];
// let result = [];
// if (arr1[0].length != 1) {
//   for (let j = 0; j < arr1.length; j++) {
//     for (let i = 0; i < arr1[0].length; i++) {
//       newArr.push(arr1[j][i] + arr2[j][i]);
//     }
//   }
//   newArr = [newArr];
//   let newArr1 = newArr[0].slice(0, newArr[0].length / 2);
//   let newArr2 = newArr[0].slice(newArr[0].length / 2, newArr[0].length);
//   result = [newArr1, newArr2];
// } else {
//   for (let i = 0; i < 2; i++) {
//     newArr.push(arr1[i][0] + arr2[i][0]);
//   }
//   newArr = [newArr];
//   let newArr1 = newArr[0].slice(0, 1);
//   let newArr2 = newArr[0].slice(1);

//   result = [newArr1, newArr2];
// }
// console.log(result);

// function solution(arr1, arr2) {
//   let newArr = [];
//   let result = [];
//   if (arr1[0].length != 1) {
//     for (let j = 0; j < arr1.length; j++) {
//       for (let i = 0; i < arr1[0].length; i++) {
//         newArr.push(arr1[j][i] + arr2[j][i]);
//       }
//     }
//     newArr = [newArr];
//     let newArr1 = newArr[0].slice(0, newArr[0].length / 2);
//     let newArr2 = newArr[0].slice(newArr[0].length / 2, newArr[0].length);
//     result = [newArr1, newArr2];
//     return result;
//   } else {
//     for (let i = 0; i < 2; i++) {
//       newArr.push(arr1[i][0] + arr2[i][0]);
//     }
//     newArr = [newArr];
//     let newArr1 = newArr[0].slice(0, 1);
//     let newArr2 = newArr[0].slice(1);
//     result = [newArr1, newArr2];
//     return result;
//   }
// }
