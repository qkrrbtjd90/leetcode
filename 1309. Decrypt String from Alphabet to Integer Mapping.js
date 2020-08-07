// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

// Example 1:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// Example 2:
// Input: s = "1326#"
// Output: "acz"

// Example 3:
// Input: s = "25#"
// Output: "y"

// Example 4:
// Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
// Output: "abcdefghijklmnopqrstuvwxyz"

// Constraints:
// 1 <= s.length <= 1000
// s[i] only contains digits letters ('0'-'9') and '#' letter.
// s will be valid string such that mapping is always possible.


// 97 = a
// 122 = z
// 48 = 0
// 57 = 9

// charCodeAt
// need to convert numbered code to utf16 letter

const freqAlphabets = s => {
	const letters = s.split('#');
	let result = ''

	for (let i = 0; i < letters.length; i++) {
		let char = letters[i];

		console.log(char)

		result += letters.charCodeAt(i)
	}

	return result;
};

// console.log(freqAlphabets('10#11#12'));
// console.log(freqAlphabets('1326#'));
// console.log(freqAlphabets('25#'));
console.log(
	freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')
);
