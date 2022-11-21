// function solution(s) {
//   if (!Number(s) || s.length === 4 || s.length === 6) {
//     return false;
//   } else if (s.length === 4 || s.length === 6) {
//     return true;
//   }
// }
function solution(s) {
  s = s.toLowerCase();
  if (
    isNaN(Number(s)) ||
    s.includes("e") ||
    s.includes("x") ||
    s.includes("b")
  ) {
    return false;
  } else if (s.length === 4 || s.length === 6) {
    return true;
  } else {
    return false;
  }
}

// console.log(solution("0B0011")); // false

// let s = "12234";

// if ((parseInt(s) === NaN && s.length !== 4) || s.length !== 6) {
//   console.log(false);
// } else {
//   console.log(true);
// }

let a = "0B0011";

console.log(isNaN(Number(a)));
