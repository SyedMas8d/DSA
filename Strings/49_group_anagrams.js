// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

function anagramGrouping(strs) {
    let keys = {};

    for (let str of strs) {
        const sorted = str.split('').sort().join('');

        if (!keys[sorted]) {
            keys[sorted] = [str];
        } else {
            keys[sorted].push(str);
        }
    }

    return Object.values(keys);
}

function anagramGrouping(strs) {
    let keys = {};
    let count;
    for (let str of strs) {
        count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 97]++;
        }
        const key = count.join('#');

        if (!keys[key]) {
            keys[key] = [str];
        } else {
            keys[key].push(str);
        }
    }

    return Object.values(keys);
}

// Issue in this approch

// Yes, there's a critical logic issue in this code!

// The problem is using the sum of ASCII values to group anagrams. This approach causes hash collisions - different non-anagram strings can have the same ASCII sum.

// Example of the bug:

// "acd" = 97+99+100 = 296
// "bbc" = 98+98+100 = 296
// These are NOT anagrams but would be incorrectly grouped together!

function anagramGroupingByAscii(strs) {
    let keys = {},
        count = 0;
    for (let i = 0; i < strs.length; i++) {
        count = 0;
        // console.log(strs[i].length, strs[i][0].charCodeAt());
        for (let j = 0; j < strs[i].length; j++) {
            count += strs[i][j].charCodeAt(); // count the ascii value
        }

        if (!keys[count]) {
            keys[count] = [strs[i]];
        } else {
            keys[count].push(strs[i]);
        }
    }

    console.log(Object.values(keys));

    return Object.values(keys);
}

anagramGrouping(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
anagramGrouping(['cab', 'tin', 'pew', 'duh', 'may', 'ill', 'buy', 'bar', 'max', 'doc']); // showing as wrong
