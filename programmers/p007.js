// false 면 해당 b - 2b

function solution(absolutes, signs) {
  let arr = [];
  sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      arr.push(absolutes[i]);
    } else if (signs[i] !== true) {
      arr.push(absolutes[i] - 1);
    }
  }
  for (const j of arr) {
    sum += j;
  }
  return sum;
}

solution([4, 2, 3, 1, 4], [true, false, true, false, false]);
