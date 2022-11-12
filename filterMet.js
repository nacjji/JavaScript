const numbers = [0,1,2,3,4]
const eventNumbers = numbers.filter(function(value){
    // 배열 중 짝수인 수만 리턴
    return value%2 === 0
})

console.log(`원래 배열 : ${numbers}`)
console.log(`짝수 배열 : ${eventNumbers}`)
