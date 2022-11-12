function min(...items){
    let output = items[0]
    for (const item of items) {
        if (output > item) {
            output = item            
        }        
    }
    return output
}

console.log('min(33,42,5,56,2,101)')
console.log(min(33,42,5,56,2,101))