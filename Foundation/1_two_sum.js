// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i != j && nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
}

// HASH MAP
// https://chatgpt.com/share/696afd9c-bdc0-800e-8569-f804a38b745e

// Hash Map Approach - Optimal Solution
// Time Complexity: O(n), Space Complexity: O(n)
function twoSumOptimal(nums, target) {
  const numMap = new Map(); // or use {} for plain object

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in map
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    // Store current number and its index
    numMap.set(nums[i], i);
  }

  return [];
}

const result1 = twoSum([2, 7, 11, 15], 9);
const result2 = twoSum([3, 2, 4], 6);
const result1Optimal = twoSumOptimal([2, 7, 11, 15], 9);
const result2Optimal = twoSumOptimal([3, 2, 4], 6);

console.log("Brute Force:", result1, result2);
console.log("Hash Map (Optimal):", result1Optimal, result2Optimal);
