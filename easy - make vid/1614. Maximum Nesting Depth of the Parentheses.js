// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.

// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3

// Example 3:
// Input: s = "1+(2*3)/(2-1)"
// Output: 1

// Example 4:
// Input: s = "1"
// Output: 0

// Constraints:
// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.

/**
 * @param {string} 
 * @return {number}
 */

 // * for | Math.max
const maxDepth1 = s => {
	let depth = 0;
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (char === '(') {
			stack.push(char);

			depth = Math.max(depth, stack.length);
		} else if (char === ')') stack.pop();
	}

	return depth;
};

//* for | Math.max
const maxDepth2 = s => {
	let depth = 0;
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (char === '(') {
			stack.push(char);

			if (depth < stack.length) depth = stack.length;
		} else if (char === ')') stack.pop();
	}

	return depth;
};

//* for | Math.max
const maxDepth3 = s => {
  let depth = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth = Math.max(depth, ++count)
    else if (s[i] === ')') count--;
  }

  return depth;
}

//* Match | reduce
const maxDepth4 = s => {
	const str = s.match(/[(|)]/g, '');
	let l = 0;
	let r = 0;

	if (!str) return l - r;

	return str.reduce((acc, cv) => {
    cv === '(' ? l++ : r++;
    
		return Math.max(l - r, acc);
	}, 0);
};

//* Mathch | reduce
// acc accumulates callback's return values; it is the accumulated value previously returned in the last invocation of the ballback
const maxDepth = s => {
	const str = s.match(/[(|)]/g, '');
  let depth = 0;
  
  if (!str) return depth;

  return str.reduce((acc, cv) => {
    cv === '(' ? depth++ : depth--;

    return Math.max(depth, acc)
  }, 0)
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
console.log(maxDepth('(1)+((2))+(((3)))'));
console.log(maxDepth('1+(2*3)/(2-1)'));
console.log(maxDepth('1'));
