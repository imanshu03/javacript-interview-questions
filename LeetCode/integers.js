var reverse = function (x) {
    let res = 0;
    while (x !== 0) {
        console.log(x);
        res = res * 10 + (x % 10);
        x = parseInt(x / 10);
    }
    return res;
};

console.log(reverse(-321));