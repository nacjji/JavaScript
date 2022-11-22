function solution(n) {
  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    if (n / i === i) {
      cnt++;
      return (i + 1) * (i + 1);
    }
  }
  if (cnt === 0) {
    return -1;
  }
}

console.log(solution(121)); /// 144

// console.log(121 / 11);
