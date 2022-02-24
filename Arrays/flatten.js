const createDeepArr = (depth = 1000) => {
  let res = [1];
  for (let i = 2; i <= depth; i++) {
    res = [res, i];
  }
  return res;
};

const flattenArr = (input) => {
  let stack = [...input];
  let res = [];
  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      res.push(item);
    }
  }
  return res;
};

const arr = createDeepArr();
console.log(flattenArr(arr));
