// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Approach 1: Set-based DP (Your approach - corrected)
function partitionEqualSubsetSum(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);

    // If sum is odd, can't partition equally
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    let dp = new Set([0]); // Possible sums we can achieve

    for (let num of nums) {
        const newDp = new Set(dp); // Copy existing sums

        for (let prevSum of dp) {
            const newSum = prevSum + num;
            if (newSum === target) return true; // Early termination
            if (newSum < target) newDp.add(newSum);
        }
        dp = newDp;
    }
    return dp.has(target);
}

// Approach 2: 2D DP Array (Classic approach)
function partitionEqualSubsetSum2D(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    const n = nums.length;

    // dp[i][j] = can we make sum j using first i elements
    const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

    // Base case: sum 0 is always possible (empty subset)
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            const currentNum = nums[i - 1];

            // Don't take current number
            dp[i][j] = dp[i - 1][j];

            // Take current number (if possible)
            if (j >= currentNum) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - currentNum];
            }
        }
    }

    return dp[n][target];
}

// Approach 3: 1D DP Array (Space Optimized) - BEST
function partitionEqualSubsetSumOptimal(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    // dp[j] = can we make sum j
    const dp = Array(target + 1).fill(false);
    dp[0] = true; // sum 0 is always possible

    for (let num of nums) {
        // Traverse backwards to avoid using same element twice
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
            if (dp[target]) return true; // Early termination
        }
    }

    return dp[target];
}

// Approach 4: Backtracking (For understanding logic)
function partitionEqualSubsetSumBacktrack(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    nums.sort((a, b) => b - a); // Sort descending for better pruning

    function backtrack(index, currentSum) {
        if (currentSum === target) return true;
        if (currentSum > target || index >= nums.length) return false;

        // Include current element
        if (backtrack(index + 1, currentSum + nums[index])) return true;

        // Exclude current element
        return backtrack(index + 1, currentSum);
    }

    return backtrack(0, 0);
}

// Test all approaches
const testCases = [
    [1, 5, 11, 5], // true
    [1, 2, 3, 5], // false
    [1, 1], // true
    [1, 2, 5], // false
    [], // true (edge case)
];

console.log('=== Performance Comparison ===');
testCases.forEach((nums, i) => {
    console.log(`\nTest ${i + 1}: [${nums}]`);

    console.time('Set DP');
    const result1 = partitionEqualSubsetSum(nums);
    console.timeEnd('Set DP');

    console.time('2D DP');
    const result2 = partitionEqualSubsetSum2D(nums);
    console.timeEnd('2D DP');

    console.time('1D DP (Optimal)');
    const result3 = partitionEqualSubsetSumOptimal(nums);
    console.timeEnd('1D DP (Optimal)');

    console.time('Backtrack');
    const result4 = partitionEqualSubsetSumBacktrack(nums);
    console.timeEnd('Backtrack');

    console.log(`Results: ${result1} | ${result2} | ${result3} | ${result4}`);
    console.log(result1 === result2 && result2 === result3 && result3 === result4 ? '✓ All match' : '✗ Mismatch!');
});
