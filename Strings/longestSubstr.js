// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0;
    if (s.length === 1) return 1;
    let max = -1, test = "";
    for (let i = 0; i < s.length; i++) {
        if (test.includes(s[i])) {
            max = test.length > max ? test.length : max;
            let idx = test.indexOf(s[i]);
            test = test.slice(idx + 1);
        }
        test += s[i];
    }
    if (test.length > max) return test.length;
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));