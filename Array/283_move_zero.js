// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZeros(nums) {
    const n = nums.length;

    if (n === 0) return [];
    if (n === 1) return nums;

    let l = 0;
    r = 0;
    while (r < n) {
        if (nums[r]) {
            const temp = nums[r];
            nums[r] = nums[l];
            nums[l] = temp;
            l++;
        }
        r++;
    }

    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
