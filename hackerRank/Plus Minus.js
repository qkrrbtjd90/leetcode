// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example
// arr = [1,1,0,-1,-1]
// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.40,  2/5 = .40 and 1/5 0.20. Results are printed as:

// 0.400000
// 0.400000
// 0.200000

// Function Description
// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):
// int arr[n]: an array of integers

// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format
// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// Constraints
// 0 < n <= 100
// -100 <= arr[i] <= 100

// Output Format
// Print the following  lines, each to  decimals:

// 1. proportion of positive values
// 2. proportion of negative values
// 3. proportion of zeros

// Sample Input
// 6
// -4 3 -9 0 4 1

// Sample Output
// 0.500000
// 0.333333
// 0.166667

// Explanation
// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.50, negative: 2/6 = 0.33 and zeros: 1/6 = 0.167.

const plusMinus = arr => {
	let pos = 0;
	let neg = 0;
	let zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) pos++;
		else if (arr[i] < 0) neg++;
		else zero++;
	}

	console.log(pos / arr.length);
	console.log(neg / arr.length);
	console.log(zero / arr.length);
};

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
