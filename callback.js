// 1. 1을 출력하는 first 함수 생성
function first(){
    console.log(1)
}

first()


//2. 1을 출력하고 2를 출력하고 싶음, callback 함수로 사용할 second 함수 생성
function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()

//3. second 함수의 매개변수 i 를 생성
function first(){
    console.log(1)

}
// 
function second(i){
    console.log(i)
}

first()


// 4.  second 함수를 first 함수에 전달하기 위해 callback 매개변수를 만들고 인자를 부여, first에 second 인자를 넣고 실행
function first(callback){
    console.log(1)
    callback(2)
}

function second(i){
    console.log(i)
}

first(second)


// >> 1
//    2











