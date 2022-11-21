// arr 내 평균구하기

// sum / len

function solution(arr) {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum / arr.length;
}

solution([1, 2, 3]);
