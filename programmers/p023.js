function solution(n) {
  n = String(n);
  let a = [];
  for (let i = 0; i < n.length; i++) {
    a.push(n[i]);
  }
  a = a.reverse();
  let b = [];
  for (let j = 0; j < a.length; j++) {
    b.push(parseInt(a[j]));
  }
  return b;
}

console.log(solution(12345));
