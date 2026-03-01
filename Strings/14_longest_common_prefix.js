// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

function longestCommonPrefix(strs) {
    if (strs.length == 1) return strs[0];
    let res = '';
    for (let i = 0; i < strs[0].length; i++) {
        console.log(strs[0][i]);

        for (let s of strs) {
            if (i == s.length || s[i] != strs[0][i]) {
                return res;
            }
        }

        res += strs[0][i];
    }

    return res;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

function longestCommonPrefixImproved(strs) {
    if (strs.length == 1) return strs[0];

    let longestPrefix = strs[0];
    const n = strs.length;
    let i = 1;

    while (i < n) {
        if (!strs[i].startsWith(longestPrefix)) {
            longestPrefix = longestPrefix.slice(0, -1);
        } else {
            i++;
        }
    }

    return longestPrefix;
}

console.log(longestCommonPrefixImproved(['flower', 'flow', 'flight']));
