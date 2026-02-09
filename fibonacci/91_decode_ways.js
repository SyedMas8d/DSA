function decodeWays(s) {
    if (s[0] === '0') return 0;

    let prev1 = 1,
        prev2 = 1;

    for (let i = 1; i < s.length; i++) {
        let current = 0;

        // Check single digit
        const singleDigit = parseInt(s[i]);
        if (singleDigit > 0 && singleDigit < 10) {
            current += prev1;
        }

        // Check double digit
        const doubleDigit = parseInt(`${s[i - 1]}${s[i]}`);
        if (doubleDigit > 9 && doubleDigit < 27) {
            current += prev2;
        }

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

console.log(decodeWays('22'));
