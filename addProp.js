let student = {}
student.name = 'James'
student.age = 18
student.gender = 'male'


// stringify : 1번째 매개변수에 객체명
// 2번째 매개변수에 객체 내 특정 속성만 추출하고 싶을 때 사용하고, 전체를 출력할 때 null을 사용
// 3번째 매개변수는 들여쓰기를 몇칸 할지 설정한다.
console.log(JSON.stringify(student, null, 2))