const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefined
  // cat밖에 없자낭
  
  console.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined
  
//  참조가 nullish (null 또는 undefined)이라면, 
//  에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다. 
//  함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, undefined를 리턴한다.