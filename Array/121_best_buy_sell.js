// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// ==================== SOLUTION APPROACHES ====================

// Better way
var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currentVal = prices[i];
        if (currentVal - minPrice > maxProfit) {
            //   pair = [minPrice, currentVal];
            maxProfit = currentVal - minPrice;
        }
        if (currentVal < minPrice) {
            minPrice = currentVal;
        }
    }

    return maxProfit;
};

//  Two pointers, sliding window
function maxProfit(prices) {
    const n = prices.length;

    if (n === 0) return 0;
    if (n === 1) return prices[0];

    let maxProfit = 0;
    let l = 0; // buy
    let r = 1; // sell

    while (r < n) {
        // Is profitable
        console.log(prices[l], prices[r], maxProfit);
        if (prices[l] < prices[r]) {
            // Always subtract from (r - l) (5 - 1) other wise 1 - 5 = -4
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
        } else {
            // buyDay = sellDay
            l = r;
        }

        r++;
    }

    return maxProfit;
}

// ==================== TEST CASES ====================

// Test Case 1: Basic example
console.log('=== Test Case 1 ===');
let test1 = [7, 1, 5, 3, 6, 4];
console.log(`Input: [${test1}]`);
console.log(`Expected Output: 5 (Buy at 1, Sell at 6)`);
console.log(`Brute Force: ${maxProfitBruteForce(test1)}`);
console.log(`Optimal: ${maxProfit(test1)}`);
console.log(`DP: ${maxProfitDP(test1)}`);
console.log();

// Test Case 2: Decreasing prices (no profit possible)
console.log('=== Test Case 2 ===');
let test2 = [7, 6, 4, 3, 1];
console.log(`Input: [${test2}]`);
console.log(`Expected Output: 0 (No profitable transaction)`);
console.log(`Brute Force: ${maxProfitBruteForce(test2)}`);
console.log(`Optimal: ${maxProfit(test2)}`);
console.log(`DP: ${maxProfitDP(test2)}`);
console.log();

// Test Case 3: Single element
console.log('=== Test Case 3 ===');
let test3 = [5];
console.log(`Input: [${test3}]`);
console.log(`Expected Output: 0 (Need at least 2 days)`);
console.log(`Optimal: ${maxProfit(test3)}`);
console.log();

// Test Case 4: Two elements
console.log('=== Test Case 4 ===');
let test4 = [1, 5];
console.log(`Input: [${test4}]`);
console.log(`Expected Output: 4 (Buy at 1, Sell at 5)`);
console.log(`Optimal: ${maxProfit(test4)}`);
console.log();

// Test Case 5: Complex case
console.log('=== Test Case 5 ===');
let test5 = [3, 2, 6, 5, 0, 3];
console.log(`Input: [${test5}]`);
console.log(`Expected Output: 4 (Buy at 2, Sell at 6)`);
console.log(`Optimal: ${maxProfit(test5)}`);

// ==================== ALGORITHM ANALYSIS ====================
/*
DSA USED: Greedy Algorithm + Single Pass Array Traversal

WHY THIS IS THE BEST APPROACH:
1. Time Complexity: O(n) - Single pass through array
2. Space Complexity: O(1) - Only using two variables
3. Intuitive Logic: Track min price and max profit simultaneously
4. No need for complex data structures

KEY INSIGHTS:
- We want to buy at lowest price and sell at highest future price
- Keep track of minimum price seen so far (best buying opportunity)
- At each day, calculate profit if we sell today
- Maximum profit is the best among all possible sell days

PATTERN: This is a classic example of:
- Kadane's Algorithm variation (maximum subarray problem)
- Greedy choice: Always choose the best local option
- Dynamic Programming: Each day's decision depends on previous optimal choices
*/
