let lottoNums = new Set();

// 로또번호 추첨
let makeLotto = ()=>{
    while(true){
        let makeLottoNum = Math.random()
        lottoNums.add(parseInt(makeLottoNum*45))
        if(lottoNums.size === 6){
            break
        }
    }
}

// 내가 입력한 로또번호
let myNums = new Set()
let i = 0 
let makeMyNums = ()=>{
    while(myNums.size < 6){
        i++
        let nums = Number(prompt(`${i}번째 숫자를 입력하세요`))
        if (nums <= 0 || nums > 45 || !nums) {  
            alert('1부터 45까지의 중복되지 않은 숫자를 입력하세요.')
            i-- 
        }else{
            myNums.add(nums)   
        }
    }
}


// 등수 판별



while (true) {
    makeLotto()
    makeMyNums()
    if(!confirm('다시 할까요?')){
        break
    }
}
console.log(myNums)
console.log(lottoNums)


for (let k = 0; k < 6; k++) {
    if(myNums[k]))
    
}