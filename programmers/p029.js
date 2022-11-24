function solution(strings, n) {
  return strings.map((v) => v[n]).sort();
}

console.log(solution(["sun", "bed", "car"], 1));
