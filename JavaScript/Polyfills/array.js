Array.prototype.myFilter = function (filterFn) {
  const arr = this;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterFn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

Array.prototype.myMap = function (mapFn) {
  const arr = this;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = mapFn(arr[i], i, arr);
    res.push(item);
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myFilter((item) => item % 2 === 0));
console.log(arr.myMap((item) => item * 2));
