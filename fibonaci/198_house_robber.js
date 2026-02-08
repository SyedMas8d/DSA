function houseRobber(house) {
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
