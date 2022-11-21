// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열
// numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아
// 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 0 부터 9까지 배열
// 매개변수 배열 하나하나가 0부터 9까지 접근해서 일치하는 수가 있는지 판단
// 일치하면 뺌
// 빼고 난 나머지를 더함

// function solution(numbers) {
//   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   numbers = [7, 8, 0];
//   for (i of numbers) {
//     arr.splice(arr.indexOf(i), 1);
//   }

//   return console.log(arr);
// }

// solution([0, 1, 2, 3, 4]);

// solution([1, 2, 4]);
// let noNum = () => {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// };

// cnt = 0;
function solution(para) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  sum = 0;
  //   let para = [1, 2, 3];
  for (i of para) {
    arr.splice(arr.indexOf(i), 1);
  }
  for (const j of arr) {
    sum += j;
  }

  return console.log(arr, sum);
}
solution([1, 2, 3, 4, 5, 6, 7]);
