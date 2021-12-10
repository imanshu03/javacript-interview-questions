// Zig-Zag Conversion

const convert = function (s, numRows) {
    let stack = [];

    if (numRows === 1) return s;

    for (let i = 0; i < numRows; i++) {
        if (i === 0 || i === numRows - 1) {
            let counter = i;
            while (counter < s.length) {
                stack.push(s[counter]);
                counter += (2 * numRows) - 2;
            }
        } else {
            if (i < Math.floor(numRows / 2) || i > Math.floor(numRows / 2) || (i === Math.floor(numRows / 2) && numRows % 2 === 0)) {
                let counter = i;
                let toggle = true;
                while (counter < s.length) {
                    stack.push(s[counter]);
                    if (toggle) {
                        counter += (2 * numRows) - 2 - (2 * i);
                        toggle = false;
                    } else {
                        counter += (2 * numRows) - 2 - (2 * (numRows - i - 1));
                        toggle = true;
                    }
                }
            }
            if (i === Math.floor(numRows / 2) && numRows % 2 !== 0) {
                let counter = i;
                while (counter < s.length) {
                    stack.push(s[counter]);
                    counter += numRows - 1;
                }
            }
        }
    }
    return stack.join('');
};

console.log(convert('IMANSHURATHORE', 4));

/*
I     U     R
M   H R   O E
A S   A H
N     T
*/