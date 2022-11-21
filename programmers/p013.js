// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수,
// solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지
// 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// function solution(a, b) {}

// solution(2, 4);

// 1. 30일까지와 31일까지인 월
// 31 : 1,3,5,7,8,10,12
// 30 : 4,6,8,10,11
// 29 : 2

function solution(a, b) {
  let today = new Date(`2016-${a}-${b}`);
  if (today.getDay() === 0) {
    return console.log("SUN");
  } else if (today.getDay() === 1) {
    return console.log("MON");
  } else if (today.getDay() === 2) {
    return console.log("TUE");
  } else if (today.getDay() === 3) {
    return console.log("WED");
  } else if (today.getDay() === 4) {
    return console.log("THU");
  } else if (today.getDay() === 5) {
    return console.log("FRI");
  } else if (today.getDay() === 6) {
    return console.log("SAT");
  }
}

solution(5, 26);

//입력받은 날짜가 몇번째 날인지로 변환해야함

// if (today % 7 === 0) {
//   console.log("MON");
// } else if (today % 7 === 1) {
//   console.log("MON");
// } else if (today % 7 === 2) {
//   console.log("MON");
// } else if (today % 7 === 3) {
//   console.log("MON");
// } else if (today % 7 === 4) {
//   console.log("MON");
// } else if (today % 7 === 5) {
//   console.log("MON");
// } else if (today % 7 === 6) {
//   console.log("MON");
//  }

// let a = 3;
// let b = 5;

// let today = new Date(`2016-${a}-${b}`);
// console.log(today.getDay());
// if (today.getDay() === 0) {
//   console.log("SUN");
// } else if (today.getDay() === 1) {
//   console.log("MON");
// } else if (today.getDay() === 2) {
//   console.log("MON");
// } else if (today.getDay() === 3) {
//   console.log("MON");
// } else if (today.getDay() === 4) {
//   console.log("MON");
// } else if (today.getDay() === 5) {
//   console.log("MON");
// } else if (today.getDay() === 6) {
//   console.log("MON");
// }

// function solution(a, b) {
//   let today = new Date(`2016-${a}-${b}`);
//   if (today.getDay === 0) {
//     return "SUN";
//   } else if (today.getDay() === 1) {
//     return "MON";
//   } else if (today.getDay() === 2) {
//     return "MON";
//   } else if (today.getDay() === 3) {
//     return "MON";
//   } else if (today.getDay() === 4) {
//     return "MON";
//   } else if (today.getDay() === 5) {
//     return "MON";
//   } else if (today.getDay() === 6) {
//     return "MON";
//   }
// }
