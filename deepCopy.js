const deep = {
  name: "James",
  age: "28",
  class: {
    firstClass: 1,
    secondClass: 2,
  },
};

const deep2 = { ...deep };

deep.class.firstClass = 3;

console.log(deep2);
