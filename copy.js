let shallowCopy = {};
let shallowCopy2 = {
  name: "James",
  age: "28",
};
shallowCopy = shallowCopy2;

shallowCopy.age = 29;

console.log(shallowCopy.age); // james
