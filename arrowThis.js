let test = {
    a : function(){
        console.log(this)
    },
    b : () => {
        console.log(this)
    }
}
process.stdout.write('function 으로 선언한 메소드 : ')
test.a()
process.stdout.write('화살표 함수로 선언한 메소드 : ')
test.b()