// Write a function that finds the first non-repeating character in a string.
// Input: 'aabbcdde';
// Output: 'c';

function nonRepeatingCh(s) {
    const freq = {};

    // Step 1: Count frequency
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: Find first char with frequency 1
    for (let char of s) {
        if (freq[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(nonRepeatingCh('aabbcdde'));
