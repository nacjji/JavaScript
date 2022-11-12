function min(array){
    let output = array[0]
    for (const item of array) {
        if (output < item) {
            output = item            
        }
    }
    return output
}

let testArray = [51,23,56,33,1,102]
console.log(`${testArray} 중에서`)
console.log(`최댓값 ${min(testArray)} 입니다.`)