// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// function pickMinCoinChange(coins, targetChange) {
//     const coin = {};
//     const remain = {};
//     const picks = {};
//     let minPick = targetChange + 1;
//     console.log(coins.sort((a, b) => b - a));

//     console.log(coins);

//     for()

//     for (let i = 0; i < coins.length; i++) {
//         console.log(i, coins[i]);

//         coin[coins[i]] = coins[i];

//         let pick = 0;
//         let total = 0;
//         while (total < targetChange) {
//             console.log(total);
//             if (total + coins[i] < targetChange) {
//                 console.log('if cod.');
//                 total += coins[i];
//                 pick++;
//             } else if (total + coins[i] == targetChange) {
//                 console.log('else if cod.', targetChange, total + coins[i]);
//                 picks[coins[i]] = pick;
//                 minPick = Math.min(minPick, pick);
//                 return minPick;
//             } else {
//                 console.log('else cod.');
//                 break;
//             }
//         }

//         picks[coins[i]] = pick;

//         if (coins[i] == 5) {
//             console.log('total', total, 'picks', picks);
//         }

//         remain[coins[i]] = targetChange - total;

//         if (coin[targetChange - total]) {
//             minPick = Math.min(minPick, picks[coins[i]] + 1);
//             return minPick;
//         }
//     }

//     return -1;
// }

// console.log(pickMinCoinChange([1, 2, 5], 11));

function coinChangeOptimal(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                // is equals check of (i - coin >= 0)
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log('Result:', coinChangeOptimal([1, 2, 5], 11));

//  Better approch in leetCode

var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const c of coins) {
        for (let i = c; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - c] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
