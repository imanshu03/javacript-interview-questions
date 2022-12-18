// Polyfill for Array methods

Array.prototype.polyfillMap = function(mapFn) {
    const array = this;
    const response = [];
    for(let idx in array) {
        response.push(mapFn(array[idx], idx, array));
    }
    return response;
}

Array.prototype.polyfillFilter = function(filterFn) {
    const array = this;
    const response = [];
    for(let idx in array) {
        if(filterFn(array[idx])) response.push(array[idx], idx, array);
    }
    return response;
}

Array.prototype.polyfillReduce = function(reduceFn, intialValue = 0) {
    const array = this;
    let response = intialValue;
    for(let idx in array) {
        response = reduceFn(response, array[idx], idx, array);
    }
    return response;
}

Array.prototype.polyfillEvery = function(comparatorFn) {
    const array = this;
    let result = true;
    for(let element of array) {
        result = result && Boolean(comparatorFn(element));
    }
    return result;
}

Array.prototype.polyfillSome = function(comparatorFn) {
    const array = this;
    let result = true;
    for(let element of array) {
        result = result || Boolean(comparatorFn(element));
    }
    return result;
}