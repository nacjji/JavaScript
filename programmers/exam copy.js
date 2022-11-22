function solution(s) {
  s = s.split(" ");

  let notSosu = [];
  let sosu = [];
  // [1,2,3,4,5,6,7,8,9]
  for (let i of s) {
    i = Number(i);
    let cnt = 0;
    for (let j = 0; j < i + 1; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt === 2) {
      sosu.push(i);
    } else {
      notSosu.push(i);
    }

    console.log(sosu);
    console.log(notSosu);
  }

  let notSosuMin = Math.min(...notSosu);
  let sosuMax = Math.max(...sosu);

  return ` 최소값 : ${notSosuMin} 최댓값 : ${sosuMax}`;
}

console.log(solution("1 2 3 4 5 6 7 8 9"));
