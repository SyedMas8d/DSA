// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

function reverseString(s) {
    const n = s.length;
    if (n === 0) return [];
    for (let i = 0, j = n - 1; i < n; i++, j--) {
        if (i > j || i == j) return s;
        const temp = s[j];
        s[j] = s[i];
        s[i] = temp;
    }

    return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
