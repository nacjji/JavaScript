// 로또번호 추첨
let lotto = new Set()

while(true){
    let makeLottoNum = Math.random()
    lotto.add(parseInt(makeLottoNum*45))
    if(lotto.size === 6){
        break
    }
}
// set to array
let lottoArray = [...lotto]


// 로또 입력 
let [a,b,c,d,e,f] = prompt("로또번호를 입력하세요").split(" ")

let inputNums = [a,b,c,d,e,f]

// 로또번호 유효한지 판별
for (let i = 0; i < inputNums.length; i++) {
    if (i <= 0 && i>45) {
        alert('1부터 45까지의 숫자를 입력하세요')
    }
}

// 입력과 추첨번호가 일치한지 판별 filter


console.log(lottoArray)
console.log(lucky)