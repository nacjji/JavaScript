function solution(price, money, count) {
  var answer = -1;
  let pay = 0;
  for (let i = 1; i <= count; i++) {
    pay += price * i;
    console.log(`이용료 : ${price}, 가진돈 :  ${money}, 내야될 돈 ${pay}`);
  }

  return console.log(answer * (20 - pay));
}
solution(10, 20, 5);
