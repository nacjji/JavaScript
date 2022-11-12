async function asyncTimer(timer){
    console.log("짜장면 배달됨")
    await console.log('식사완료')
}



function asyncTimer(seconds){
    console.log("짜장면 배달됨")
    setTimeout(()=>{
        console.log("식사 완료")
        },
        seconds*1000
    ) 
    console.log("배달부 떠남")
}

asyncTimer(5)