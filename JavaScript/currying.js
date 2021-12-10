function sumSingle(val) {
    let result = 0;
    if (val) {
        result += val;
        function getSum(x) {
            if (x) {
                result += x;
                return getSum;
            }
            return result;
        };
        return getSum;
    }
    return result;
}

function sumMultiple() {
    let result = 0;
    if (arguments.length) {
        result += [...arguments].reduce((res, i) => res += i, 0);
        function getSum() {
            if (arguments.length) {
                result += [...arguments].reduce((res, i) => res += i, 0);
                return getSum;
            }
            return result;
        }
        return getSum;
    }
    return result;
}

console.log(sumSingle(10)(20)(30)(40)(40)(40)(40)());

console.log(sumMultiple(10, 20, 30)(40, 50, 60)());