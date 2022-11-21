function solution(s) {
  if (s.length % 2 === 0) {
    let sMiddleEven1 = s.length / 2 - 1;
    let sMiddleEven2 = s.length / 2;
    return s[sMiddleEven1] + s[sMiddleEven2];
  } else {
    let sMiddleEven = parseInt(s.length / 2);
    return s[sMiddleEven];
  }
}

solution();
