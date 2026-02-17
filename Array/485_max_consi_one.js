// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

function maxConsicutiveOnes(nums) {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0] === 1 ? 1 : 0;

    let maxCons = 0;
    let currentCons = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            currentCons++;
            maxCons = Math.max(currentCons, maxCons);
        } else {
            currentCons = 0;
        }
    }

    console.log(maxCons);
}

maxConsicutiveOnes([1, 1, 0, 1, 1, 1]);
