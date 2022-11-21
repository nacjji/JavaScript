const immu = {
  data: "immutable data",
};

Object.freeze(immu);
immu.data = "make it mutable";

console.log(immu.data);
