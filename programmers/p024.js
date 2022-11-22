function solution(n) {
  n = String(n);
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.push(n[i]);
  }
  let result = arr.sort((a, b) => {
    return b - a;
  });
  let answer = "";
  for (let j = 0; j < result.length; j++) {
    answer += result[j];
  }
  return parseInt(answer);
}

console.log(solution(12543215)); // 55432211
