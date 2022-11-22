function solution(x) {
  let arr = [];
  let strX = String(x);
  for (let i = 0; i < strX.length; i++) {
    arr.push(strX[i]);
  }
  let sum = 0;
  for (let j of arr) {
    sum += parseInt(j);
  }
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(18)); // true

//18 / (1+8) == 0
