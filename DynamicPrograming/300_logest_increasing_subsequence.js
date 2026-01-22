// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Approach 2: Binary Search + DP - O(n log n) Time, O(n) Space (OPTIMAL)
function longestIncreasingSubsequence_Optimal(nums) {
    if (nums.length === 0) return 0;

    const tails = []; // tails[i] = smallest tail element for LIS of length i+1

    for (const num of nums) {
        let left = 0,
            right = tails.length;

        // Binary search for the correct position
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If left == tails.length, we're extending the LIS
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Replace the element at position 'left' with num
            tails[left] = num;
        }
    }

    return tails.length;
}

// Your original approach (fixed)
function logestIncreasingSubArray(nums) {
    if (nums.length === 0) return 0;

    const LIS = new Array(nums.length).fill(1); // Fix: Initialize with 1, not 0
    let maxLength = 1; // Fix: Start with 1

    for (let i = nums.length - 1; i >= 0; i--) {
        // Fix: nums.length typo
        for (let j = i + 1; j < nums.length; j++) {
            // Fix: nums.length typo
            if (nums[i] < nums[j]) {
                LIS[i] = Math.max(LIS[i], LIS[j] + 1);
                maxLength = Math.max(maxLength, LIS[i]); // Fix: Add Math.max
            }
        }
    }

    return maxLength;
}

var lengthOfLIS = function (nums) {
    const dp = new Array(nums + 1).fill(1);

    var maxLength = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);

                maxLength = Math.max(maxLength, dp[i]);
            }
        }
    }

    return maxLength;
};

const testArray = [10, 9, 2, 5, 3, 7, 101, 18];

console.log('Result : ', logestIncreasingSubArray(testArray));
console.log('Result : ', longestIncreasingSubsequence_Optimal(testArray));

console.log(lengthOfLIS(testArray));
