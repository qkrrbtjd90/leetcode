// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

// Constraints:
// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

//* for
const balancedStringSplit1 = str => {
  let result = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const s = str[i]

    s === 'L' ? count++ : count--;
    if (count === 0) result++
  }

  return result;
}

//todo map | split
const balancedStringSplit2 = str => {
  let result = 0;
  let count = 0;

  str.split('').map(s => {
    if (s === 'L') count++;
    else count--;

    if (count === 0) result++
  })

  return result;
}

//! for | without using 'L' 'R'
const balancedStringSplit3 = str => {
  let result = 0;
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    str[i] === str[0] ? count++ : count--;

    if (count === 0) result++
  }

  return result;
}

//! stacks
const balancedStringSplit = str => {
  let stack = [str[0]];
  let result = 0;

  for (let i = 1; i < str.length; i++) {
    let s = str[i]

    if (s === stack[stack.length - 1] || !stack.length) stack.push(s)
    else stack.pop()

    if (stack.length === 0) result++
  }

  return result;
}

console.log(balancedStringSplit('RLRRLLRLRL'))
console.log(balancedStringSplit('RLLLLRRRLR'))
console.log(balancedStringSplit('LLLLRRRR'))
console.log(balancedStringSplit('RLRRRLLRLL'))

