let pet = {
    name : 'maum',
    eat : function (food){
        console.log(`${this.name} 은 ${food}를 먹습니다.`)
    }
}

pet.eat('사료')