function solution(n) {
  n = String(n);
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i] * 1;
  }
  return sum;
}

console.log(solution(123)); //6
