// function solution(phone_number) {
//   let li = [];
//   let num = phone_number.slice([-4]);
//   let stars = phone_number.replace(num, "");
//   for (const i of stars) {
//     li.push(i.replace(i, "*"));
//   }
//   let starNum = "";
//   for (const j of li) {
//     starNum += j;
//   }
//   return starNum + num;
// }

// // return console.log()

// solution("01058407682");

// 0~7을 *로 바꿔

// let phone_number = "01058407682";
// let back = phone_number.slice([-4]);

// let front = phone_number.replace(back, "");

// console.log(phone_number.replace(front, "*"));

// let phone_number = "01057682";

// let li = [];
// let num = phone_number.slice([-4]);
// let stars = phone_number.replace(num, "");

// console.log(stars + num);
// for (const i of stars) {
//   li.push(i.replace(i, "*"));
// }
// let starNum = "";
// for (const j of li) {
//   starNum += j;
// }
// console.log(starNum + num);
// console.log(stars);
// for (const i of phone_number) {
//   li.push(i.replace(i, "*"));
// }
// console.log(li);
let phone_number = "01058407682";
let li = [];
let num = phone_number.slice([-4]);
let stars = phone_number.replace(num, "");
console.log(stars);
for (const i of stars) {
  li.push(i.replace(i, "*"));
}
console.log(li);
let starNum = "";
for (const j of li) {
  starNum += j;
}

console.log(starNum + num);
