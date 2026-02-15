// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique.

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique.

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

/**
 * DSA Used: MERGE SORT
 * Time Complexity: O(n log n) - guaranteed in all cases
 * Space Complexity: O(n) - for temporary arrays during merging
 * 
 * Why Merge Sort:
 * - Guaranteed O(n log n) performance (stable performance)
 * - Divide and conquer approach
 * - Stable sorting algorithm (maintains relative order of equal elements)
 * - Predictable performance regardless of input distribution
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    
    return mergeSort(nums, 0, nums.length - 1);
};

/**
 * Merge Sort implementation using divide and conquer
 * @param {number[]} arr - array to sort
 * @param {number} left - left boundary
 * @param {number} right - right boundary
 * @return {number[]} sorted array
 */
function mergeSort(arr, left, right) {
    // Base case: if subarray has 1 or 0 elements
    if (left >= right) {
        return [arr[left]];
    }
    
    // Find the middle point to divide the array into two halves
    const mid = Math.floor((left + right) / 2);
    
    // Recursively sort both halves
    const leftSorted = mergeSort(arr, left, mid);
    const rightSorted = mergeSort(arr, mid + 1, right);
    
    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
}

/**
 * Merge two sorted arrays into one sorted array
 * @param {number[]} left - left sorted array
 * @param {number[]} right - right sorted array
 * @return {number[]} merged sorted array
 */
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and add the smaller one
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements from left array (if any)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Add remaining elements from right array (if any)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

// Alternative in-place merge sort (more space efficient)
/**
 * In-place merge sort implementation
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayInPlace = function(nums) {
    if (nums.length <= 1) return nums;
    
    mergeSortInPlace(nums, 0, nums.length - 1);
    return nums;
};

function mergeSortInPlace(arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Sort first and second halves
        mergeSortInPlace(arr, left, mid);
        mergeSortInPlace(arr, mid + 1, right);
        
        // Merge the sorted halves
        mergeInPlace(arr, left, mid, right);
    }
}

function mergeInPlace(arr, left, mid, right) {
    // Create temporary arrays for left and right subarrays
    const leftArr = [];
    const rightArr = [];
    
    // Copy data to temporary arrays
    for (let i = left; i <= mid; i++) {
        leftArr.push(arr[i]);
    }
    for (let j = mid + 1; j <= right; j++) {
        rightArr.push(arr[j]);
    }
    
    // Merge the temporary arrays back into arr[left..right]
    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements of leftArr[], if any
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    // Copy remaining elements of rightArr[], if any
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

// Test cases
console.log("=== MERGE SORT TESTING ===");

console.log("\nTest Case 1:");
console.log("Input: [5,2,3,1]");
console.log("Output:", sortArray([5,2,3,1]));
console.log("Expected: [1,2,3,5]");

console.log("\nTest Case 2:");
console.log("Input: [5,1,1,2,0,0]");
console.log("Output:", sortArray([5,1,1,2,0,0]));
console.log("Expected: [0,0,1,1,2,5]");

console.log("\nTest Case 3 - Edge Cases:");
console.log("Empty array:", sortArray([]));
console.log("Single element:", sortArray([42]));
console.log("Already sorted:", sortArray([1,2,3,4,5]));
console.log("Reverse sorted:", sortArray([5,4,3,2,1]));
console.log("Duplicates:", sortArray([3,3,3,3,3]));

console.log("\n=== IN-PLACE MERGE SORT TESTING ===");
let test1 = [5,2,3,1];
console.log("Before:", test1);
console.log("After:", sortArrayInPlace([...test1]));

let test2 = [5,1,1,2,0,0];
console.log("Before:", test2);
console.log("After:", sortArrayInPlace([...test2]));
