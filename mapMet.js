let numbers = [123,42,5,7,94,52]

numbers = numbers.map(function(value, index, array){
    return value * value
})

numbers.forEach(console.log)