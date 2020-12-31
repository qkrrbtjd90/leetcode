// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// Constraints:
// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

//* nested loop
const countConsistentStrings1 = (allowed, words) => {
	let result = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		for (let j = 0; j < word.length; j++) {
			const char = word[j];

			if (!allowed.includes(char)) break;
			else if (j === word.length - 1) result.push(word);
		}
	}

	return result.length;
};

//* nested loop
const countConsistentStrings2 = (allowed, words) => {
	let count = 0;

	words.forEach(word => {
		for (let j = 0; j < word.length; j++) {
			const char = word[j];

			if (!allowed.includes(char)) break;
			else if (j === word.length - 1) count++;
		}
	});

	return count;
};

//! new RegExp | filter | test()
// test() method executes a search for a match between a regular expression and a specified string. Returns true or false

const countConsistentStrings3 = (allowed, words) => {
	const regex = new RegExp(`^[${allowed}]+$`);

	return words.filter(word => regex.test(word)).length;
};

//! //? reduce | every | has | new Set
const countConsistentStrings4 = (allowed, words) =>
	(allowedSet =>
		words.reduce(
			(acc, curr) => acc + [...curr].every(char => allowedSet.has(char)),
			0
		))(new Set([...allowed]));

//! new Set | has | IDK ???????? outer:
const countConsistentStrings5 = (allowed, words) => {
	const allowedSet = new Set([...allowed]);
	let count = 0;

	console.log(allowedSet);

	outer: for (const word of words) {
		for (const char of word) {
			if (!allowedSet.has(char)) continue outer;
		}

		count++;
	}

	return count;
};

//! new Set | forEach | split | every | has
const countConsistentStrings = (allowed, words) => {
	let str = new Set(allowed.split(''));
	let count = 0;

	words.forEach(word => {
		// for of
		if (word.split('').every(char => str.has(char))) {
			count++;
		}
	});

	return count;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
// console.log(
// 	countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])
// );
// console.log(
// 	countConsistentStrings('cad', [
// 		'cc',
// 		'acd',
// 		'b',
// 		'ba',
// 		'bac',
// 		'bad',
// 		'ac',
// 		'd',
// 	])
// );
