// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

// Constraints:

// 1 <= n <= 104

// APPROACH 1: Dynamic Programming (Bottom-Up) - BEST SOLUTION
// Time: O(n * √n), Space: O(n)
function numSquaresDP(n) {
  // dp[i] = minimum number of perfect squares that sum to i
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 requires 0 perfect squares

  // Build solution from 1 to n
  for (let i = 1; i <= n; i++) {
    // Try all perfect squares j² where j² <= i
    for (let j = 1; j * j <= i; j++) {
      const square = j * j;
      // dp[i] = minimum of current OR (dp[i - square] + 1)
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  return dp[n];
}

// Test cases
console.log("=== Quick Tests ===");
console.log(`n = 4: ${numSquaresDP(4)} (Expected: 1, because 4 = 2²)`);
console.log(
  `n = 12: ${numSquaresDP(12)} (Expected: 3, because 12 = 4 + 4 + 4)`,
);
console.log(`n = 13: ${numSquaresDP(13)} (Expected: 2, because 13 = 4 + 9)`);

console.log("\n=== Comparing DP vs BFS ===");
console.log(`DP:  n=12 → ${numSquaresDP(12)}, n=13 → ${numSquaresDP(13)}`);
