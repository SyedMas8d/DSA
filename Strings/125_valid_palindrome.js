// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * DSA Used:
 * 1. Two Pointers Technique (OPTIMAL)
 * 2. String Manipulation
 * 3. Character validation (alphanumeric check)
 *
 * Time Complexity: O(n) where n is length of string
 * Space Complexity: O(1) - constant space, only using pointers
 */
// Run time 6 ms
function validPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
}

function validPalindromeImproved(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    const n = s.length;
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        if (s[i] != s[n - i - 1]) {
            return false;
        }
    }

    return true;
}
