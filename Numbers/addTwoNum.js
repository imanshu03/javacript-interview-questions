var addTwoNumbers = function (l1, l2) {
    let result = [], maxArr = [], minArr = [];
    let carry = 0, add = 0;
    if (l1.length >= l2.length) {
        maxArr = l1;
        minArr = l2;
    } else {
        maxArr = l2;
        minArr = l1;
    }
    for (let i = 0; i < maxArr.length; i++) {
        add = maxArr[i] + carry;
        if (minArr[i] !== undefined) {
            add = add + minArr[i];
        }
        carry = add >= 10 ? 1 : 0;
        add = add >= 10 ? add % 10 : add;
        result.push(add);
    }
    if (carry > 0) {
        result.push(carry);
    }
    return result;
};

console.log(addTwoNumbers([2, 4, 8, 9], [5, 6, 4]));