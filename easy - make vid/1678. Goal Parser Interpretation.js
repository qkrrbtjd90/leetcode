// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:
// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:
// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

/**
 * @param {string} command
 * @return {string}
 */

//* for
const interpret = command => {
  let result = ''

	for (let i = 0; i < command.length; i++) {
		const char = command[i];
    const nextChar = command[i + 1];

		if (char === 'G') result += 'G'
    else if (char === '(' && nextChar === ')') {
      result += 'o';
      i++;
    }
    else if (char === '(' && nextChar === 'a') {
      result += 'al';
      i+=3
    }
	}

	return result;
};

//* join | split
const interpret2 = command => {
	return command.split('()').join('o').split('(al)').join('al');
};

//todo regex
const interpret3 = command => {
	return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};

// For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, "*" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, /a*/ means match 0 or more "a"s. To match * literally, precede it with a backslash; for example, /a\*/ matches "a*".

// To match this character literally, escape it with itself. In other words to search for \ use /\\/

console.log(interpret('G()(al)'));
console.log(interpret('G()()()()(al)'));
console.log(interpret('(al)G(al)()()G'));
