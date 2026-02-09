// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

function houseRob(house, n) {
    const totalRob = new Array(n);

    totalRob[0] = house[0];
    totalRob[1] = Math.max(house[0], house[1]);

    for (let i = 2; i < n; i++) {
        totalRob[i] = Math.max(totalRob[i - 2] + house[i], totalRob[i - 1]);
    }

    return totalRob[n - 1];
}

function houseRobPartTwo(house) {
    const n = house.length;
    if (n === 0) return 0;
    if (n === 1) return house[0];

    // Since its circular 1st house and last house are adjacent.
    // Calculate Max from 0 to last-1 & 1 to last
    return Math.max(
        houseRob(house.slice(1), n - 1), // index 1 to n-1
        houseRob(house.slice(0, -1), n - 1) // index 0 to n-2
    );
}

console.log(houseRobPartTwo([2, 1, 1, 2]));
