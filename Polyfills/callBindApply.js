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

// using apply() or call()
Function.prototype.polyfillBind1 = function (context, ...args) {
    const func = this;
    return function (...args2) {
        func.apply(context, [...args, ...args2]);
        // func.call(context, ...[...args, ...args2]);
    };
};

// without using apply() or call()
Function.prototype.polyfillBind2 = function (context, ...args) {
    context.func = this;
    return function (...args2) {
        context.func(...[...args, ...args2]);
    };
};

