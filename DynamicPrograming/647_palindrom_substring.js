// 647. Palindromic Substrings
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

var countPalindromSubstrings = function (s) {
    const n = s.length;

    if (n === 0) return 0;
    if (n === 1) return 1;

    let paliCount = 0;
    for (let i = 0; i < n; i++) {
        paliCount += getPaliCount(s, i, i, n);
        paliCount += getPaliCount(s, i, i + 1, n);
    }

    return paliCount;
};

var getPaliCount = function (s, l, r, n) {
    let count = 0;
    while (l >= 0 && r < n && s[l] == s[r]) {
        count++;
        l -= 1;
        r += 1;
    }

    return count;
};

console.log(countPalindromSubstrings('aaa'));
