// function* countSales(price) {
//     yield "Counting sales";
//     yield price.reduce((prevVal, curVal) => curVal += prevVal, 0);
//     yield "Sales counted";
// }

// const sales = countSales([1, 2, 3, 4, 5]);
// console.log(sales.next());
// console.log(sales.next());
// console.log(sales.next());
// console.log(sales.next());

function* counter(value) {
  let step;
  while (true) {
    step = yield value++;
    if (step) value += step;
  }
}

const genFunc = counter(0);
console.log(genFunc.next());
console.log(genFunc.next());
console.log(genFunc.next());
console.log(genFunc.next(10));
console.log(genFunc.next());
console.log(genFunc.next());
console.log(genFunc.next(10));
console.log(genFunc.next());
console.log(genFunc.next());

async function* getCount() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(() => resolve(i), i * 1000));
  }
}

(function () {
  for await (let res of getCount()) {
    console.log(res);
  }
})();
