function squarePerfect(n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (j = 1; j * j <= i; j++) {
      const square = j * j;

      dp[i] = Math.min(dp[i], dp[i - square] + 1);

      console.log(`${i}__${dp[i]}`);
    }
  }

  return dp[n];
}

console.log("Result:", squarePerfect(4));
