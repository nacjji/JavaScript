function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

// solution([1, 3, 5, 7], [2, 4, 6, 8]);

//2 12 30 56

let a = [-1, 0, 1];
let b = [1, 0, -1];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i] * b[i];
}
console.log(sum);
