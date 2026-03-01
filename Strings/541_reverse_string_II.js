// 541. Reverse String II
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

// Constraints:
// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

/**
 * DSA Used:
 * 1. String Manipulation
 * 2. Two Pointers Technique for reversing
 * 3. Array iteration with custom step (2k)
 *
 * Time Complexity: O(n) where n is length of string
 * Space Complexity: O(n) for converting string to array
 */

// Best solution 0ms
function reverseStrII(s, k) {
    const n = s.length;
    if (n == 0) return '';
    s = s.split('');
    let temp = 0; // Create temp here it will decrese the run time instead of creating inside while
    for (let i = 0; i < n; i += 2 * k) {
        let l = i;
        let r = Math.min(l + k - 1, n - 1);

        while (l < r) {
            temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
    }

    return s.join('');
}

reverseStrII('abcdefg', 2);
/**
 * Pattern Explanation:
 *
 * For s = "abcdefg", k = 2:
 * - Position 0-3 (2k=4): Reverse first 2 chars -> "ba" + "cd"
 * - Position 4-7 (2k=4): Reverse first 2 chars -> "fe" + "g"
 * - Result: "bacdfeg"
 *
 * Step-by-step visualization:
 * Original: a b c d e f g
 *           ↑ ↑ ↑ ↑ ↑ ↑ ↑
 * i=0 (0-3): reverse(0,1) -> b a c d e f g
 * i=4 (4-7): reverse(4,5) -> b a c d f e g
 * Result:    b a c d f e g
 */
