function solution(s) {
  answer = [];

  let wordsArr = s.split(" ");

  for (let i of wordsArr) {
    for (let j = 0; j < i.length; j++) {
      if (j % 2 === 0) {
        answer += i[j].toUpperCase();
      } else {
        answer += i[j].toLowerCase();
      }
    }
    answer += " ";
  }
  console.log(answer);
  return answer.trim();
}

console.log(solution("     tRy  hello          WORLD"));
// function solution(s) {}

// 1. 매개변수로 받은 단어를 어절단위로 나눠
// 2. 나눈 단어의 길이만큼 반복
// 3. 단어의 짝수 인덱스만 추출해서 새로운 배열에 담아
// 4. 그 배열을 대문자로 바꾸고 홀수 배열 뒤로 보낸다.
function solution(s) {
  let answer = "";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      index = 0;
      answer += " ";
    } else {
      if (index % 2 === 0) {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
      index++;
    }
  }
  return answer;
}
