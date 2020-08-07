// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// Example 1:
// Input: "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Example 2:
// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

// Example 3:
// Input: "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

// Note:
// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

const removeOuterParentheses1 = s => {
	let result = [];
	let stack = [];
	let counter = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(s[i]);
			counter++;
		} else if (s[i] === ')') {
			stack.push(s[i]);
			counter--;
		}

		if (counter === 0) {
			result.push(stack.slice(1, stack.length - 1));
			stack = [];
		}
	}

	return result.join('').replace(/(,)/g, '');
};

const removeOuterParentheses = s => {
	let result = '';
	let counter = 1;

	for (let i = 1; i < s.length - 1; i++) {
		if (s[i] == ')') counter--;
		if (counter > 0) result = result + s[i];
		if (s[i] == '(') counter++;
	}

	return result;
};

const removeOuterParentheses3 = s => {
	let stack = [];
	let result = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			if (stack.length) result += s[i];
			stack.push(s[i]);
		} else {
			stack.pop();
			if (stack.length) result += s[i];
		}
	}

	return result;
};

console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())(())(()(()))'));
console.log(removeOuterParentheses('()()'));
