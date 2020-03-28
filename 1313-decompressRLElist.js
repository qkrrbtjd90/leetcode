//* 1313. Decompress Run-Length Encoded List

// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are a elements with value b in the decompressed list.

// Return the decompressed list.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// Constraints:

// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100

//* nested for loop
const decompressRLElist1 = nums => {
  let result = [];

  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i + 1];

    console.log(freq);
    console.log(val);

    for (let i = 0; i < freq; i += 1) {
      result.push(val);
    }
  }

  return result;
};

//! for | while
const decompressRLElist2 = nums => {
  let result = [];

  for (let i = 0; i < nums.length; i += 2) {
    while (nums[i] > 0) {
      result.push(nums[i + 1]);
      nums[i]--;
    }
  }

  return result;
};

//! helper | recrusive tail
var decompressRLElist3 = function(nums) {    
  return recursion(nums, 0)
};

function recursion(nums, numPosition, result = [], currentPair = []) {
  if (numPosition >= nums.length) return result;
  
  const freq = nums[numPosition]
  const value = nums[numPosition + 1]

  for (let i = 0; i < freq; i++) {
      currentPair.push(value)
  }
  
  return recursion(nums, numPosition + 2, result.concat(currentPair))    
}

//! for loop | slice | concat | new Array | fill
const decompressRLElist4 = nums => {
  let result = [];

  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = nums.slice(i, i + 2); // make number into pairs
    const encode = new Array(freq).fill(val); // create encoding for each pair

    result = result.concat(encode); // concat to result
  }

  return result;
};

//! for loop | new Array | fill
const decompressRLElist5 = nums => {
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    const arr = new Array(nums[i]).fill(nums[i + 1]);
    console.log(arr);
    result.push(...arr);
  }

  return result;
};

//! recursive | new Array | fill
const decompressRLElist6 = (deflated, inflated = []) =>
  !deflated.length
    ? inflated
    : decompressRLElist6(
        deflated.slice(2),
        inflated.concat(new Array(deflated[0]).fill(deflated[1])),
      );

//! reduce | ternary | ... | Array | fill
const decompressRLElist7 = function(nums) {
  return nums.reduce(
    (acc, cur, i, arr) =>
      i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
    [],
  );
};

//! reduce | ... | fill | new Array
const decompressRLElist8 = nums => {
  return nums.reduce((acc, cv, i) => {
    if (i % 2) return acc;
    acc.push(...new Array(nums[i]).fill(nums[i + 1]));

    return acc;
  }, []);
};

console.log(decompressRLElist6([1, 2, 3, 4])); // [2,4,4,4]
