const arr = [1, 2, 3];

//maps
const myMapResult = arr.map((item) => item * 2);

Array.prototype.myMap = function (callBack) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callBack(this[i], i, this));
  }
  return arr;
};
const myMapResult1 = arr.myMap((item) => item * 2);
console.log(myMapResult, myMapResult1);


//filter
Array.prototype.myFilter = function (callBack) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const fill = arr.filter((item) => item > 1);
const fill1 = arr.myFilter((item) => item > 1);
console.log(fill, fill1);


//reduce
const red = arr.reduce((prev, cur) => prev + cur, 0);
Array.prototype.myReduce = function (callBack, initial = null) {
  let currentValue = initial;
  for (let i = 0; i < this.length; i++) {
    currentValue = callBack(currentValue, this[i], i, this);
  }
  return currentValue;
};
const red1 = arr.myReduce((prev, cur) => prev + cur, 0);

console.log(red, red1);
