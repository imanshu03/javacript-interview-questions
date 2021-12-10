function checkBalance(str) {
    const arr = str.split();
    const res = [];

    for (let val in str) {
        if (val === '(') {
            res.push();
        }
        else {
            res.pop();
        }
    }

    console.log(`Balanced : ${res.length === 0}`);
}

checkBalance('(()()(()))');