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

// ASCII
// 97 = a
// 122 = z
// need to convert numbered code to utf16 letter


// const freqAlphabets = s => {
// 	let result = '';

// 	for (let i = 0; i < s.length; i++) {
// 		if (s[iing ] === '#') {
// 			result += String.fromCharCode(96 + Number(s[i] + s[i +st]))ring is not #
// 		}.1 push c(s[i] !== '#') {
// 			result += String.fromCharCode(96 + Number(s[i]))
// 		}
// 	}
// 	return result;
// }

// console.log(freqAlphabets('10#11#12'));
// console.log(freqAlphabets('1326#'));
// console.log(freqAlphabets('25#'));
// console.log(
// 	freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')
// );




















//* 2 for loop
const freqAlphabets1 = s => {
	let result = '';
	const split = [];

	// handle two digit numbers
	for (let i = 0; i < s.length; i++) {
		if (s[i + 2] === '#') {
			split.push(s[i] + s[i + 1]);
			i++;
		} else if (s[i] !== '#') split.push(s[i]);
	}

	// convert number to alphabet
	for (let i = 0; i < split.length; i++) {
		result += String.fromCharCode(96 + Number(split[i]));
	}

	return result;
};

//* 1 for loop
const freqAlphabets = s => {
	let result = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i + 2] === '#') {
			result += String.fromCharCode(96 + Number(s[i] + s[i + 1]));
			i++;
		} else if (s[i] !== '#') {
			result += String.fromCharCode(96 + Number(s[i]));
		}
	}

	return result;
};

//* regex | map | join
const freqAlphabets3 = s => {
	return s
		.match(/\d{2}(?=#)|\d/g)
		.map(num => String.fromCharCode(96 + Number(num)))
		.join('');
};

//* replace | map dictionary
const freqAlphabets4 = s => {
	const map = {
		'1': 'a',
		'2': 'b',
		'3': 'c',
		'4': 'd',
		'5': 'e',
		'6': 'f',
		'7': 'g',
		'8': 'h',
		'9': 'i',
		'10': 'j',
		'11': 'k',
		'12': 'l',
		'13': 'm',
		'14': 'n',
		'15': 'o',
		'16': 'p',
		'17': 'q',
		'18': 'r',
		'19': 's',
		'20': 't',
		'21': 'u',
		'22': 'v',
		'23': 'w',
		'24': 'x',
		'25': 'y',
		'26': 'z',
	};

	return s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);
};

//* for | map dictionary
const freqAlphabets5 = s => {
	let result = '';
	const map = {
		'1': 'a',
		'2': 'b',
		'3': 'c',
		'4': 'd',
		'5': 'e',
		'6': 'f',
		'7': 'g',
		'8': 'h',
		'9': 'i',
		'10': 'j',
		'11': 'k',
		'12': 'l',
		'13': 'm',
		'14': 'n',
		'15': 'o',
		'16': 'p',
		'17': 'q',
		'18': 'r',
		'19': 's',
		'20': 't',
		'21': 'u',
		'22': 'v',
		'23': 'w',
		'24': 'x',
		'25': 'y',
		'26': 'z',
	};

	for (let i = 0; i < s.length; i++) {
		result += map[s[i + 2] === '#' ? ((i += 2), s[i - 2] + s[i - 1]) : s[i]];
	}

	return result;
};

//* Most simple
const freqAlphabets6 = s => {
	let result = '';

	for (let i = 0; i < s.length; i++) {
		let cv = s[i];

		if (s[i + 2] === '#') {
			cv = s.slice(i, i + 2);
			i += 2;
		}

		result += String.fromCharCode(96 + Number(cv))
	}

	return result;
}
// console.log(freqAlphabets('10#11#12'));
// console.log(freqAlphabets('1326#'));
// console.log(freqAlphabets('25#'));
console.log(
	freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')
);
