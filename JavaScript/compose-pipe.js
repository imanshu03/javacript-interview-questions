const mul5 = (num) => num * 5;
const add2 = (num) => num + 2;
const sub3 = (num) => num - 3;

const result = sub3(add2(mul5(10)));
console.log(result); // 49

// Compose - it combines multiple functions and works in right to left order
const compose = (...fns) => value => fns.reduceRight((val, fn) => fn(val), value);

const composedResult = compose(sub3, add2, mul5)(10);
console.log(composedResult); // 49


// Pipe - it combines multiple functions and works in left to right order
const pipe = (...fns) => value => fns.reduce((val, fn) => fn(val), value);

const pipedResult = pipe(sub3, add2, mul5)(10);
console.log(pipedResult); // 45