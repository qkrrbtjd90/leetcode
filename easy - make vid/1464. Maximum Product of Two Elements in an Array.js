// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example 1:
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// Example 2:
// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Example 3:
// Input: nums = [3,7]
// Output: 12

// Constraints:
// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3

//* sort
const maxProduct1 = nums => {
	nums.sort((a, b) => a - b);

	let max1 = nums[nums.length - 1] - 1;
	let max2 = nums[nums.length - 2] - 1;

	return max1 * max2;
};

//* nested loop | Math.max
const maxProduct2 = nums => {
	let products = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			products.push((nums[i] - 1) * (nums[j] - 1));
		}
	}

	return Math.max(...products);
};

//* sort | slice
const maxProduct3 = nums => {
	const [x, y] = nums.sort((a, b) => b - a).slice(0, 2);

	return (x - 1) * (y - 1);
};

//* for
const maxProduct4 = nums => {
	let max1 = -Infinity;
	let max2 = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max1) {
			max2 = max1;
			max1 = nums[i];
			// handles duplicate numbers
		} else if (nums[i] > max2) max2 = nums[i];
	}

	return (max1 - 1) * (max2 - 1);
};

//todo for of | Math.max
const maxProduct5 = nums => {
	let max1 = -Infinity;
	let max2 = -Infinity;

	for (const val of nums) {
		max2 = Math.max(max2, Math.min(max1, val));
		max1 = Math.max(max1, val);
	}

	return (max1 - 1) * (max2 - 1);
};

//! two pointers | for loop | Mat.max
//todo
//*
const maxProduct6 = nums => {
	let max = -Infinity;

	// traverse from beginning and at end to meet at middle
	for (let i = 0, j = nums.length - 1; i < j; ) {
		max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
		nums[i] < nums[j] ? i++ : j--;
	}

	return max;
};

//! reduce | Math.max | Math.min
//todo function as parameter
//*
const maxProduct = (
	nums,
	max = nums.reduce(
		(prev, val) => [
			Math.max(prev[1], Math.min(prev[0], val)),
			Math.max(prev[0], val),
		],
		[0, 0]
	)
) => (max[0] - 1) * (max[1] - 1);

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
