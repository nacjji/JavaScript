// function check(ci, co) {
//   let study = [];
//   for (const i of co) {
//     for (const j of ci) {
//     }
//     study.push(i - j);
//   }
//   return study;
// }

// console.log(check([9, 9, 8, 8, 7, 8, 9], [21, 25, 30, 29, 22, 23, 30]));

function solution(month, day) {
  let date = new Date(`2022-${month}-${day}`);
  // 2022 6 22
  date.setDate(date.getDate() + 99);

  return date;
}

console.log(solution(6, 22));
