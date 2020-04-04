//! 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

//* nested for loop
const smallerNumbersThanCurrent1 = nums => {
  let result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let cv = nums[i];

    for (let j = 0; j < nums.length; j += 1) {
      let num = nums[j];

      if (cv > num) {
        count++;
      }
    }

    result.push(count);
    count = 0;
  }

  return result;
};

//! new Map | slice | sort | map | reverse | get
const smallerNumbersThanCurrent2 = nums => {
  const map = new Map(
    nums
      .slice() // create shallow copy
      .sort((a, b) => a - b) // sort
      .map((n, idx) => [n, idx]) // override duplicate values
      .reverse() // reverse
  );

  console.log(map)

  return nums.map(n => map.get(n));
};

//! new Map | slice | sort | forEach | if | has | set | get
const smallerNumbersThanCurrent3 = nums => {
  const map = new Map();

  nums
    .slice()  // shallow copy
    .sort((a, b) => a - b) // sort
    .forEach((n, i) => { // iterate (cv, idx)
      if (!map.has(n)) map.set(n, i); // if map does not have n, add (num, idx)
    });

  // match num to get key from map
  return nums.map(n => (num = map.get(n)));
};

//! new Map | slice | sort | nest for loop | has | set | get
const smallerNumbersThanCurrent4 = nums => {
  // creates a new instance of Map {}
  //! slice() creates a shallow copy, then sort ascending order
  // sort so that we can check how many are smaller
  const map = new Map();
  const arr = nums.slice().sort((a, b) => a - b);

  // iterate through sorted array
  // each count basically counts num of smaller num
  // if current num NOT in map,
  // .set(add) current number to map; {arr[i] => i} 
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], i);
  }

  // iterate through array
  // set/replace current number to value from map
  for (let i = 0; i < nums.length; i++) {
    nums[i] = map.get(nums[i]);
  }

  return nums;
};

console.log(smallerNumbersThanCurrent2([8, 1, 2, 2, 3])); // [4,0,1,1,3]
// console.log(smallerNumbersThanCurrent4([6, 5, 4, 8])); // [2,1,0,3]
// console.log(smallerNumbersThanCurrent4([7, 7, 7, 7])); // [0,0,0,0]
