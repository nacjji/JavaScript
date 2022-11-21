function solution(price, money, count) {
  for (let i = 1; i < count + 1; i++) {
    let priceN = price * i;
    money -= priceN;
  }
  if (money < 0) {
    console.log(money * -1);
  } else {
    console.log(0);
  }
}

solution(3, 20, 4); // // solution(3, 20, 4); //10 // // money 음수가되면 price 가 얼마 부족한지

//  price 3
// 2price 6
// 3price 9

let price = 3;
let money = 20;
let count = 4;

for (let i = 1; i < count + 1; i++) {
  let priceN = price * i;
  money -= priceN;
  console.log(`남은 돈 ${money} 놀이기구 가격${priceN}`);
}
if (money < 0) {
  console.log(money * -1);
} else {
  console.log(0);
}
