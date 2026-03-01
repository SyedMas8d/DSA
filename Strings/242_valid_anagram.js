// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * DSA Used:
 * 1. Hash Map / Frequency Counter (OPTIMAL)
 * 2. String Manipulation
 *
 * Time Complexity: O(n) where n is length of strings
 * Space Complexity: O(k) where k is number of unique characters (at most 26 for lowercase)
 */

/**
 * Solution 1: Hash Map / Object Approach (OPTIMAL for general case)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Early exit: different lengths can't be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create frequency map for characters in s
    const charCount = {};

    // Count characters in s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract counts for characters in t
    for (let char of t) {
        if (!charCount[char]) {
            return false; // Character not in s or count went negative
        }
        charCount[char]--;
    }

    // All counts should be zero if it's an anagram
    return true;
};

/**
 * Solution 2: Sorting Approach
 *
 * DSA: Sorting algorithm
 * Time Complexity: O(n log n) - due to sorting
 * Space Complexity: O(n) - for creating sorted strings
 */
var isAnagramSorting = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // Sort both strings and compare
    return s.split('').sort().join('') === t.split('').sort().join('');
};

/**
 * Solution 3: Array as Hash Table (BEST for lowercase letters only)
 *
 * DSA: Array-based frequency counter
 * Time Complexity: O(n)
 * Space Complexity: O(1) - fixed size array of 26
 */
var isAnagramArray = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // Create array to count frequency of each letter (a-z)
    const count = new Array(26).fill(0);

    // Process both strings simultaneously
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++; // 'a' is 97 in ASCII
        count[t.charCodeAt(i) - 97]--;
    }

    // Check if all counts are zero
    return count.every((c) => c === 0);
};

/**
 * Solution 4: Map Approach (Modern JS)
 *
 * DSA: Hash Map using ES6 Map
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is unique characters
 */
var isAnagramMap = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    // Count characters in s
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Check and decrement for t
    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }

    return true;
};

// Test Cases
console.log('=== Solution 1: Hash Map (Optimal) ===');
console.log('Test 1:', isAnagram('anagram', 'nagaram'), '// Expected: true');
console.log('Test 2:', isAnagram('rat', 'car'), '// Expected: false');
console.log('Test 3:', isAnagram('listen', 'silent'), '// Expected: true');
console.log('Test 4:', isAnagram('hello', 'world'), '// Expected: false');
console.log('Test 5:', isAnagram('a', 'a'), '// Expected: true');

console.log('\n=== Solution 2: Sorting ===');
console.log('Test 1:', isAnagramSorting('anagram', 'nagaram'), '// Expected: true');
console.log('Test 2:', isAnagramSorting('rat', 'car'), '// Expected: false');

console.log('\n=== Solution 3: Array Hash Table (Best for lowercase) ===');
console.log('Test 1:', isAnagramArray('anagram', 'nagaram'), '// Expected: true');
console.log('Test 2:', isAnagramArray('rat', 'car'), '// Expected: false');

console.log('\n=== Solution 4: ES6 Map ===');
console.log('Test 1:', isAnagramMap('anagram', 'nagaram'), '// Expected: true');
console.log('Test 2:', isAnagramMap('rat', 'car'), '// Expected: false');

/**
 * Algorithm Comparison:
 *
 * 1. Hash Map (OPTIMAL for general case):
 *    - Time: O(n)
 *    - Space: O(k) where k is unique chars
 *    - Best when: String can have any characters
 *
 * 2. Sorting:
 *    - Time: O(n log n)
 *    - Space: O(n)
 *    - Best when: Simplicity is preferred, small strings
 *
 * 3. Array Hash (BEST for lowercase only):
 *    - Time: O(n)
 *    - Space: O(1) - fixed 26 elements
 *    - Best when: Guaranteed lowercase letters only
 *
 * 4. ES6 Map:
 *    - Time: O(n)
 *    - Space: O(k)
 *    - Best when: Using modern JS features
 *
 * RECOMMENDATION: Use Hash Map (Solution 1) for interviews -
 * it's optimal, clean, and handles all cases.
 */
