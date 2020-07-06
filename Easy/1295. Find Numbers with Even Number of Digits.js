// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// Example 2:
// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

// Constraints:
// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

//* for | String | length | ``
const findNumbers1 = nums => {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		// let numLen = String(nums[i]).length; // alternate
		let numLen = `${nums[i]}`.length; //!

		if (numLen % 2 === 0) count++;
	}

	return count;
};

//! filter | length | ``
const findNumbers2 = nums => {
	return nums.filter(num => (`${num}`.length % 2 === 0 ? true : false)).length;
};

//todo reduce | ``
const findNumbers3 = nums => {
	//! why does this have to be pre-increment
	return nums.reduce((acc, cv) => (`${cv}`.length % 2 === 0 ? ++acc : acc), 0);
};

//! reduce | log10
const findNumbers4 = nums =>
	nums.reduce((acc, x) => (1 === ~~Math.log10(x) % 2 ? acc + 1 : acc), 0);

  //! filter | toString
const findNumbers = nums => nums.filter(cv => cv.toString().length % 2 === 0).length

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
