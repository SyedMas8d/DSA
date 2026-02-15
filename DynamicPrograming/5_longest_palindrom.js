// 5. Longest Palindromic Substring
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// Better solution
var longestPalindrome = function (s) {
    if (s.length === 0) return '';

    let start = 0;
    let maxLen = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i); // odd length
        expand(i, i + 1); // even length
    }

    return s.substring(start, start + maxLen);
};

/**
 * DSA Used: EXPAND AROUND CENTERS
 * Time Complexity: O(n²) - for each center, we expand outward
 * Space Complexity: O(1) - only using constant extra space
 *
 * Algorithm: Check both odd-length and even-length palindromes
 * by expanding around each possible center
 */
function longestPalindrom(s) {
    const n = s.length;

    if (n === 0) return '';
    if (n === 1) return s;

    let res = '';
    let resLen = 0;

    for (let i = 0; i < n; i++) {
        // Check odd-length palindromes (center at i)
        let l = i,
            r = i; // Fixed: proper initialization
        while (l >= 0 && r < n && s[l] === s[r]) {
            // Fixed: r - l + 1 (not l - r + 1)
            let currentLen = r - l + 1;
            if (currentLen > resLen) {
                resLen = currentLen;
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }

        // Check even-length palindromes (center between i and i+1)
        let left = i,
            right = i + 1;
        while (left >= 0 && right < n && s[left] === s[right]) {
            // Fixed: right - left + 1 (not left - right + 1)
            let currentLen = right - left + 1;
            if (currentLen > resLen) {
                resLen = currentLen;
                res = s.slice(left, right + 1);
            }
            // Fixed: use correct variable names
            left--;
            right++;
        }
    }

    return res;
}

console.log('=== Testing Longest Palindromic Substring ===');

// Test cases
console.log('Input: "babad"');
console.log('Output:', longestPalindrom('babad'));
console.log('Expected: "bab" or "aba"');

console.log('\nInput: "cbbd"');
console.log('Output:', longestPalindrom('cbbd'));
console.log('Expected: "bb"');

console.log('\nAdditional test cases:');
console.log('Single char "a":', longestPalindrom('a'));
console.log('No palindrome "abc":', longestPalindrom('abc'));
console.log('All same "aaaa":', longestPalindrom('aaaa'));
console.log('Complex "racecar123321":', longestPalindrom('racecar123321'));
