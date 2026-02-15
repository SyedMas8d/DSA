// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

// Constraints:

// -231 <= n <= 231 - 1

/**
 * DSA Used: BIT MANIPULATION
 * Time Complexity: O(1) - constant time
 * Space Complexity: O(1) - constant space
 *
 * Key Insight: Powers of 2 have exactly one bit set in binary representation
 * Formula: n > 0 && (n & (n-1)) == 0
 *
 * Why this works:
 * - Powers of 2: 1(001), 2(010), 4(100), 8(1000)... have only one bit set
 * - n-1 flips all bits after and including the rightmost set bit
 * - n & (n-1) will be 0 only if n has exactly one bit set
 * - Also need n > 0 to exclude negative numbers and 0
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n === 1) return true;
    if (n <= 0 || n % 2 !== 0) return false;

    return isPowerOfTwo(n / 2);
}

function isPowerOfTwoBitManuplationMethod() {
    // Optimal bit manipulation approach
    return n > 0 && (n & (n - 1)) === 0;
}
