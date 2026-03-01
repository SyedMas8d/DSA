// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

function singleNumber(nums) {
    const n = nums.length;

    if (n === 0) return -1;
    let freq = {};
    for (let i = 0; i < n; i++) {
        freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1;
    }

    for (let i = 0; i < n; i++) {
        if (freq[nums[i]] == 1) {
            return Object.keys(nums[i])[0];
        }
    }

    return -1;
}

console.log(singleNumber([4, 1, 2, 1, 2]));

function singleNumberByXOR(nums) {
    let res = 0;

    for (let i = 0; i < n; i++) {
        res = nums[i] ^ res;
    }

    return res;
}
