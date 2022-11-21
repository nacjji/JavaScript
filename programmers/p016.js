function solution(s) {
  let cntP = 0;
  let cntY = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      cntP++;
    }
    if (s[i] === "y" || s[i] === "Y") {
      cntY++;
    }
  }
  if (cntP === cntY) {
    return true;
  } else {
    return false;
  }
}

// console.log(solution("pyython"));

let s = "pypthon"; // true
let s2 = "pypthon"; // false

let cntP = 0;
let cntY = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "p" || s[i] === "P") {
    cntP++;
  }
  if (s[i] === "y" || s[i] === "Y") {
    cntY++;
  }
}
if (cntP === cntY) {
  console.log(true);
} else {
  console.log(false);
}
