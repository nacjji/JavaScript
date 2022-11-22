function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
}

// pa 를 반복 돌리고 comple 요소와 같다면 삭제
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // mislav
// let participant = ["mislav", "stanko", "mislav", "ana"];
// let completion = ["stanko", "ana", "mislav"];

// let loser = [];
// for (const i of participant) {
//   for (const j of completion) {
//     if (j === i) {
//       loser = delete participant[j];
//     }
//   }
// }
// console.log(loser);
