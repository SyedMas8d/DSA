// There is a robot on an m x n grid.
// The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.

// Given the two integers m and n,
// return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example:
// ------                   -----
// | [bot][__][__][__]   [__].  |
// | [__] [__] [__][__] [___].  |
// | [__] [__] [__][__][Finish] |
//  ------                  -----

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

function uniquePaths(m, n) {
    // Create 2D DP array - Method 1: Array.from (cleanest)
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    console.log('Initial DP table:', dp);

    // Fill DP table: dp[i][j] = paths from above + paths from left
    // dp[i-1][j]: ways to reach cell above (robot moved DOWN from there)
    // dp[i][j-1]: ways to reach cell left (robot moved RIGHT from there)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            //         ↑ from above   ↑ from left
            //         (moved DOWN)   (moved RIGHT)
        }
    }

    console.log('Final DP table:', dp);

    return dp[m - 1][n - 1];
}

console.log('Result : ', uniquePaths(3, 7));

// Explanation
// But problem says only can move right and buttom.. But coding approch
// "dp[i][j] = dp[i - 1][j] + dp[i][j - 1];"

// Adding left + up is that correct way?

// Excellent question! You're absolutely right to be confused - this is a common point of confusion in DP problems. Let me clarify the direction logic:

// The Key Insight: Direction vs. Source
// Problem Statement: Robot can move RIGHT and DOWN

// DP Formula: dp[i][j] = dp[i-1][j] + dp[i][j-1]

// This adds paths from LEFT and UP - but this is CORRECT! Here's why:

// Think Backwards: "How can I REACH this cell?"
// To reach cell dp[i][j], the robot could have come from:

// Cell above dp[i-1][j] → moved DOWN to reach current cell
// Cell to left dp[i][j-1] → moved RIGHT to reach current cell

// Grid positions:    What dp[1][1] represents:
// [0,0] [0,1]       To reach [1,1], robot can come from:
// [1,0] [1,1]       • [0,1] (moved DOWN) ↓
//                   • [1,0] (moved RIGHT) →
