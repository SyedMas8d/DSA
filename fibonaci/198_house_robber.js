function houseRobber(house, n) {
    const n = house.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const totalRob = new Array(n);
    totalRob[0] = house[0];
    totalRob[1] = Math.max(house[0], house[1]);

    for (let i = 2; i < n; i++) {
        totalRob[i] = Math.max(totalRob[i - 2] + house[i], totalRob[i - 1]);
    }

    return totalRob[n - 1];
}

console.log(houseRobber([2, 1, 1, 2]));

// Circular array we can't rob 1st and last value

function houseRobberTwo(house) {
    const n = house.length;

    if (n === 0) return 0;
    if (n === 1) return house[0];

    return Math.max(houseRobber(house.slice(1), n - 1), houseRobber(house.slice(0, -1), n - 1));
}

console.log(houseRobberTwo([2, 1, 1, 2]));
