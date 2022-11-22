// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

function solution(num) {
  let cnt = 0;
  while (cnt < 501) {
    if (num === 1) {
      break;
    }
    if (num % 2 === 0) {
      num = num / 2;
      cnt++;
    } else {
      num = num * 3 + 1;
      cnt++;
    }
  }
  if (cnt > 500) {
    return -1;
  } else {
    return cnt;
  }
}

console.log(solution(6)); // 8
