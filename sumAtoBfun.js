function sumAB(a,b){
    let output = 0
    for(let i = a; i < b; i++){
        output += i
    }
    return output
}

//1 부터 10 까지의 합
console.log(sumAB(1,10))