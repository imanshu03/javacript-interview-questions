const reverseStringWithSpecial = (string) => {
    const regex = /^[a-zA-Z]$/;
    const len = string.length;
    let result = Array.from(string).map(e => regex.test(e) ? '' : e);
    let i = 0, j = len - 1;
    while (i < len) {
        if (result[j] === '') {
            if (regex.test(string[i])) {
                result[j] = string[i];
                i += 1;
                j -= 1;
            } else {
                i += 1
            }
        } else {
            j -= 1;
        }
    }
    console.log(result);
}

reverseStringWithSpecial('&ab#ad$c$de');


const reverseString = (string) => {
    let arr = [], result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            arr.unshift(string[i]);
        } else {
            result += arr.join("") + " ";
            arr = [];
        }
    }
    result += arr.join("");
    console.log(result);
}

reverseString('ab cd ef');