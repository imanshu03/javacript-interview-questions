Function.prototype.polyfillCall = function (context, ...args) {
  context.func = this;
  context.func(...args);
  delete context.func;
};

Function.prototype.polyfillApply = function (context, args) {
  context.func = this;
  context.func(...args);
  delete context.func;
};

Function.prototype.polyfillBind = function (context, ...args) {
  // let fn = this;
  context.func = this;
  return function (...args2) {
    //fn.apply(context, [...args, ...args2]);
    context.func(...[...args, ...args2]);
  };
};

const obj = {
  a: 1,
  printValue: function (b, c) {
    console.log(this.a, b, c);
  },
};

obj.printValue(2, 3);

obj.printValue.call({ a: 2 }, 2, 3);

obj.printValue.polyfillCall({ a: 3 }, 2, 3);

obj.printValue.polyfillApply({ a: 4 }, [2, 3]);

const f2 = obj.printValue.polyfillBind({ a: 5 }, 2);

console.log(f2);
