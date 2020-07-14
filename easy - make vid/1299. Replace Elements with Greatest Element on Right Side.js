// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Constraints:
// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

//* for | slice | Math.max()
const replaceElements1 = arr => {
  let result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    let newArr = arr.slice(i);
    let max = Math.max(...newArr);
    let cv = arr[i];

    if (cv <= max) result.push(max);
    if (i === arr.length - 1) result.push(-1);
  }
  result.push(-1);

  return result;
};

//todo for | Math.max() | slice
const replaceElements2 = arr => {
  for (let i = 0; i < arr.length; i++) { 
    let cv = arr[i];

    if (i !== arr.length - 1) {
      cv = Math.max(...arr.slice(i + 1))
    }
    else cv = -1
  }

  return arr;
};

//todo new Array | for | Math.max()
const replaceElements3 = arr => {
  const result = new Array(arr.length);

  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};

//! for
const replaceElements = arr => {
  let currMax = arr[arr.length - 1];
  
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; --i) {
    let temp = currMax;
    let cv = arr[i]

    currMax = currMax < cv ? cv : currMax // or currMax = Math.max(currMax, arr[i])

    arr[i] = temp //! why cv = temp doesn't work
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
