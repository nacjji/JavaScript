function solution(n) {
  let arr = [];
  for (let i = 2; i < n + 2; i++) {
    arr.push(i);
  }
  for (let j = 0; j < arr.length; j++) {
    arr[j] % 2 === 0 ? (arr[j] = "수") : (arr[j] = "박");
  }
  arr = arr.join().replace(/,/g, "");
  return arr;
}

console.log(solution(3));
