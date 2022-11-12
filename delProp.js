let student = {}
student.name = 'James'
student.age = 18
student.gender = 'male'

delete student.age

console.log(JSON.stringify(student, null, 2))