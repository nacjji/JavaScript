function callTreeTimes(callback){
    for (let i = 0; i < 3; i++) {
        callback(i)  
    }
}

callTreeTimes(function (i){
    console.log(`${i}번 째 함수 호출`)
})