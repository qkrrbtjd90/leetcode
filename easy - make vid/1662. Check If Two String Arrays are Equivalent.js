// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// Example 2:
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

// Example 3:
// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

// Constraints:
// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
//* for
const arrayStringsAreEqual1 = (word1, word2) => {
	let str1, str2;
	let len = Math.max(word1.length, word2.length);

	for (let i = 0; i < len; i++) {
		const char1 = word1[i];
		const char2 = word2[i];

		if (char1) str1 += char1;
		if (char2) str2 += char2;
	}

	return str1 === str2;
};

//* join
const arrayStringsAreEqual2 = (word1, word2) => {
	return word1.join('') === word2.join('');
};

//* reduce
const arrayStringsAreEqual = (word1, word2) => {
  const str1 = word1.reduce((acc, cv) => acc + cv, '')
  const str2 = word2.reduce((acc, cv) => acc + cv, '')

  return str1 === str2;
}

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']));
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c']));
console.log(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg']));
