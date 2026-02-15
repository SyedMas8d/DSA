// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // Create DP table (m+1) x (n+1) - extra row/col for empty string cases
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // Characters match - extend the LCS by 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Characters don't match - take maximum from either direction
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// console.log(longestCommonSubsequence('abcde', 'ace'));
// console.log(longestCommonSubsequence('abcabc', 'abc'));
// console.log(longestCommonSubsequence('abc', 'def'));
console.log(longestCommonSubsequence('ezupkr', 'ubmrapg'));
