// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

// Example 1:
// Input: n = 7
// Output: 6
// Explanation: Details of the tournament:
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.

// Example 2:
// Input: n = 14
// Output: 13
// Explanation: Details of the tournament:
// - 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
// - 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 7 + 3 + 2 + 1 = 13.

// Constraints:
// 1 <= n <= 200

/**
 * @param {number}
 * @return {number}
 */

//* recursion
const numberOfMatches1 = (n, sum = 0) => {
	if (n > 1) {
		sum += parseInt(n / 2);
		n = parseInt(n / 2 + (n % 2));

		return numberOfMatches(n, sum);
	}

	return sum;
};

//* while | parseInt
const numberOfMatches2 = n => {
	let sum = 0;

	while (n > 1) {
		sum += parseInt(n / 2);
		n = parseInt(n / 2 + (n % 2));
	}

	return sum;
};

//* while
const numberOfMatches3 = n => {
	let result = 0;

	while (n > 1) {
		if (n % 2 === 0) {
			n /= 2;
			result += n;
		} else {
			n = (n - 1) / 2 + 1;
			result += n - 1;
		}
	}

	return result;
};

//* recursive
const numberOfMatches = (n, sum = 0) => {
	if (n > 1) {
		if (n % 2 === 0) {
			n /= 2;
			sum += n;

			console.log(n);

			console.log(sum);
			return numberOfMatches(n, sum);
		}

		if (n % 2 !== 0) {
			n = (n - 1) / 2 + 1;
			sum += n - 1;

			console.log(n);
			console.log(sum);
			return numberOfMatches(n, sum);
		}
	} else return sum;
};

//* while | Math.floor | Math.ceil
const numberOfMatches5 = n => {
	let sum = 0;

	while (n > 0) {
		sum = sum + Math.floor(n / 2);
		n = Math.ceil(n / 2);

		if (n === 1) n = 0;
	}

	return sum;
};

//* while | Math.floor | Math.ceil
const numberOfMatches6 = n => {
	let sum = 0;

	while (n !== 1) {
		if (n % 2 === 1) sum++;

		sum += Math.floor(n / 2);
		n = Math.floor(n / 2);
	}

	return sum;
};

// console.log(numberOfMatches(1));
// console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
