// Longest Palindromic Substring

const findPalindrome = function (s, low, high) {
    while (low >= 0 && high < s.length && (s[low] === s[high])) {
        low--;
        high++;
    }
    return s.substring(low + 1, high);
};

const longestPalindrome = function (s) {
    if (s.length === 1) return s;
    let res = "";
    let test = ""
    for (let i = 0; i < s.length; i++) {
        let test = findPalindrome(s, i, i);
        res = test.length > res.length ? test : res;
        test = findPalindrome(s, i, i + 1);
        res = test.length > res.length ? test : res;
    }
    return res;
};

console.log(longestPalindrome('cbbd'));