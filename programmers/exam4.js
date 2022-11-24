// // 우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서
// //  배(0)와 등(1)이 나오는 숫자를 세어 도, 개, 걸, 윷, 모를 결정합니다.
// // 네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때 도(배 1개, 등 3개),
// // 개(배 2개, 등 2개), 걸(배 3개, 등 1개), 윷(배 4개), 모(등 4개) 중
// // 어떤 것인지를 결정하는 프로그램을 작성하세요.

function solution(arr1) {
  let 등 = 0;
  for (const i of arr1) {
    if (i === 1) {
      등++; // 3
    }
  }
  return 등 === 1
    ? "걸"
    : 등 === 2
    ? "개"
    : 등 === 3
    ? "도"
    : 등 === 4
    ? "모"
    : "윷";
}

console.log(solution([0, 1, 1, 1]));

// 피라미드 별찍기

function solution(star) {
  let pyram = "";
  for (let i = 0; i < star; i++) {
    for (let j = star - 1; j > i; j--) {
      pyram += " ";
    }
    for (let k = 0; k <= i; k++) {
      pyram += "*";
    }
    for (let l = 1; l <= i; l++) {
      pyram += "*";
    }
    pyram += "\n";
  }

  return pyram;
}
console.log(solution(9));

console.log();
