// function 이름(매개변수) {
//   let 실행할코드;
//   return;
// }

// 이름(매개변수);

function first(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i);
  }
}

function second(i) {
  console.log(i, "second");
}

first(second);

// forEach
// 배열 , 배열의 요소를 반복문을 안쓰고도 출력

// let forArr = arr.forEach((v) => {
//   console.log(v);
// });

// console.log(forArr);
// map
// filter

let arr = [1, 2, 3, 4, 5];

// let num = arr.map(function (value) {
//   return value ** value;
// });

// console.log(num);
for (let i of arr) {
  i++;
}

console.log(num);

// let annonyFunction = () => {
//   코드내용;
//   return;
// };

// annonyFunction();
