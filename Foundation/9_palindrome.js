// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function panlindrome(x) {
    const s = x.toString();
    const n = s.length;

    if (n === 0) return false;
    if (n === 1) return true;

    for (let i = 0, j = n - 1; i < n; i++, j--) {
        // console.log(s[i], s[j])
        if (s[i] != s[j]) {
            return false;
        }
    }

    return true;
}

console.log(panlindrome(121));
