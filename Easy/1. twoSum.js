//! 1. Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//* nested for loop
const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; nums.length; j++) {
      let num1 = nums[i];
      let num2 = nums[j];

      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
};

//* for | indexOf | includes
const twoSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    let idx = nums.indexOf(diff);

    if (nums.includes(diff) && i !== idx) {
      return [i, idx];
    }
  }
};

//! obj | for | if in
const twoSum3 = (nums, target) => {
  let dic = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (diff in dic) {
      return [dic[diff], i];
    }

    dic[num] = i;
  }
};

//! new Map | for | has | set
const twoSum = (nums, target) => {
  const dic = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (dic.has(diff)) {
      return [dic.get(diff), i];
    }
    
    dic.set(num, i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
