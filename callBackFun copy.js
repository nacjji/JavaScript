function callFour(callback){
  for (let i = 0; i < 4; i++) {
    callback(i)
  }
}

function print(i){
  console.log(i)
}

callFour(print)