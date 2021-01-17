// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

// Example 1:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// Example 2:
// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

// Example 3:
// Input: arr = [10,11,12]
// Output: 66

// Constraints:
// 1 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {number}
 */

//* nested for | reduce
// get all smallest odd array then next smallest and so on
const sumOddLengthSubarrays1 = arr => {
	let sum = 0;

	// <=
	for (let i = 1; i <= arr.length; i += 2) {
		// j <= arr.length - i gets rid of j + i where there aren't any values
		for (let j = 0; j <= arr.length - i; j++) {
			let odd = arr.slice(j, j + i);

			sum += odd.reduce((acc, cv) => acc + cv, 0);

			console.log(odd);
		}
	}

	return sum;
};

//* nested for | reduce
// get smallest odd array starting from 0th element then add odd number of elements to max, then start again at the smallest odd array again
const sumOddLengthSubarrays2 = arr => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j <= arr.length; j += 2) {
			sum += arr.slice(i, j).reduce((acc, cv) => acc + cv, 0);

			console.log(arr.slice(i, j));
		}
	}

	return sum;
};

//! lease number of loops for | Math.floor
const sumOddLengthSubarrays3 = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // total number of sub-arrays
    let total = (arr.length - i) * (i + 1);
    // odd number of sub-arrays
    let odd = Math.floor(total / 2);

    if (total % 2 === 1) odd++;

    sum += arr[i] * odd
  }

  return sum;
}

//! lease number of loops for | Math.ceil
// Instead of looping through all sub-arrays
// count the number of times each number is added to the total sum by its number of occurrence in sub-arrays
const sumOddLengthSubarrays = arr => {
	let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // total number of sub-arrays
    let total = (arr.length - i) * (i + 1);
    // odd number of times arr[i] geta added to the sum
    // rounding up, includes the case where length of array is odd
    let odd = Math.ceil(total / 2);

    console.log(total)

    console.log(odd)
    console.log(arr[i])

    sum += arr[i] * odd

    console.log(sum)
  }
  
  return sum
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
// console.log(sumOddLengthSubarrays([1, 2]));
// console.log(sumOddLengthSubarrays([10, 11, 12]));
