// Given an array of numbers, return true if any number appears more than once.
// Input: [1, 2, 3, 4, 2];
// Output: true;
function checkDuplicate(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}

checkDuplicate([1, 2, 3, 4, 2]);

//  might now ask:

// 🔹 Follow-up Question:

// What if the array is extremely large and memory is limited? How would you optimize?

// If array is extremely large and memory is limited, how do you detect duplicates?

// Your previous solution used:

// HashMap / Set → O(n) space ❌ (not good if memory limited)

// So interviewer wants to test:

// Can you trade space for time?
var checkDuplicate = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};
