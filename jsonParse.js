// 객체 생성
let data = [{
    name : 'apple',
    price : 1000
}, {
    name : 'orange',
    price : 2000
}]

// 자료를 JSON 으로 변환
let json = JSON.stringify(data)
console.log(json)

// JSON 문자열을 다시 자바스크립트 객체로 변환
console.log(JSON.parse(json))

Math.