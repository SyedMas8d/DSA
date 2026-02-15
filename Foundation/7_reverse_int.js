// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

function reverse(x) {
    const s = x.toString();

    const n = s.length;
    let r = '';
    for (let i = n - 1; i >= 0; i--) {
        r += s[i];
    }

    if (x < 0) {
        return parseInt('-' + r) < (-2) ** 31 ? 0 : parseInt('-' + r);
    } else {
        return parseInt(r) > 2 ** 31 ? 0 : parseInt(r);
    }
}

console.log(reverse(-2147483648));
