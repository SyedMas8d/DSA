// Finbonacci without memozation
function minCostClimStairs(cost) {
    const n = cost.length;
    cost.push(0);

    for (let i = n - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    // console.log(steps)
    return Math.min(cost[0], cost[1]);
}

console.log(minCostClimStairs([10, 15, 20]));
