// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

function secondHighest(s) {
    const n = s.length;

    if (n === 0) return -1;

    let max = -Infinity;
    let secoundMax = -Infinity;

    for (let i = 0; i < n; i++) {
        const value = parseInt(s[i]);
        if (!isNaN(value)) {
            if (value > max) {
                secoundMax = max;
                max = value;
            } else if (value > secoundMax && value !== max) {
                secoundMax = value;
            }
        }
    }

    return secoundMax === -Infinity ? -1 : secoundMax;
}

console.log(secondHighest('dfa12321afd'));

var secondHighestOptimal = function (s) {
    const n = s.length;
    if (n === 0) return -1;

    let max = -1;
    let secoundMax = -1;

    for (let i = 0; i < n; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            const value = Number(s[i]);
            if (value > max) {
                secoundMax = max;
                max = value;
            } else if (value > secoundMax && value !== max) {
                secoundMax = value;
            }
        }
    }

    return secoundMax;
};
