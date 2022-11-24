function solution(s) {
  let dish = "";
  let words = s.split(" ");
  // let words = words[1]
  for (let i = 0; i < words.length; i++) {
    // 3번 반복
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        dish = dish + words[i][j].toUpperCase();
      } else {
        dish = dish + words[i][j];
      }
    }
    dish = dish + " ";
  }

  return dish.trim();
}
console.log(solution("try         hello world"));
