function reverseStr(s) {
    let reverse = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }

    return reverse;
}

console.log(reverseStr('masood'));

function palindrome(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome('madam'));
console.log(palindrome('hello'));
console.log(palindrome('amma'));

function maxNoOfArray(nums) {
    const n = nums.length;
    if (n === 0) return -1;
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > max) max = nums[i];
    }

    return max;
}

console.log(maxNoOfArray([3, 7, 2, 9, 5]));

function moveZeros(nums) {
    const n = nums.length;
    let l = 0;
    let r = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i]) {
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

function secoundHigh(nums) {
    const n = nums.length;
    let max = 0;
    let secoundMax = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] > max) {
            secoundMax = max;
            max = nums[i];
        } else if (nums[i] > secoundMax && nums[i] != max) {
            secoundMax = nums[i];
        }

        console.log(max, secoundMax);
    }

    return secoundMax;
}

console.log(secoundHigh([10, 5, 8, 20]));

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('immediate'));

Promise.resolve().then(() => console.log('promise'));

console.log('sync');

// Order of execution
// call stack
//    |
// microtask - (Promise / then)
//    |
// Macrotasks / Event Loop Phases

//  (
//     Timers (setTimeout, setInterval)

//     Pending callbacks

//     Poll (I/O)

//     Check (setImmediate)

//     Close callbacks
//  )

// Note: “process.nextTick has even higher priority than Promises and runs before the microtask queue is processed.”

// ✅ Problem Statement

// You are given an integer array nums of size n, where:

// Each number is in the range 1 to n

// Some elements appear twice and others once

// You need to return all elements that appear twice, using constant extra space (ignore the output list).

function returnDuplicate(nums) {
    let freq = {};

    for (let num of nums) {
        console.log(num);
        freq[num] = freq[num] ? freq[num] + 1 : 1;
    }
    console.log(freq);
    for (let num of nums) {
        if (freq[num] === 1) {
            delete freq[num];
        }
    }

    return Object.keys(freq);
}

console.log(returnDuplicate([4, 3, 2, 7, 8, 2, 3, 1]));
