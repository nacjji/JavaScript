function earnings (name, wage = 10000, hours = 40){
    console.log(`# ${name} 님의 급여정보`)
    console.log(` - 시급 : ${wage}원`)
    console.log(` - 기본 근무시간 : ${hours}시간`)
    console.log(` - 주급 : ${wage * hours}원`)
    console.log
}

earnings('주40시간 일하는 사람')
earnings('야근 12시간 더 하는 사람',10000,52)