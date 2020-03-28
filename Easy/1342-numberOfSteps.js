//? 1342. Number of Steps to Reduce a Number to Zero

//* Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

// Example 2:

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

// Constraints:

// 0 <= num <= 10^6

//* for loop
const numberOfSteps1 = num => {
  let output = 0;

  for (let i = 0; i <= num; i++) {
    // if zero
    if (num === 0) {
      return output;
    }
    // if even
    else if (num % 2 === 0) {
      output++;
      i = 0;
      num = num / 2;
      // if odd
    } else {
      output++;
      i = 0;
      num = num - 1;
    }
  }

  return output;
};

//* while loop
const numberOfSteps2 = num => {
  let count = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      count++;
      num /= 2;
    } else {
      count++;
      num--;
    }
  }

  return count;
};

//* while loop ternary
const numberOfSteps3 = function(num) {
  let count = 0;

  while (num > 0) {
    num % 2 === 0 ? (num = num / 2) : num--;
    count++;
  }
  return count;
};

//! while | >>
const numberOfSteps4 = num => {
  let i = 0;

  while (num) {
    i++;
    if (num % 2 === 0) num = num >> 1;
      
    // sign-propagating right shift
    else num--;
  }

  return i;
};

//! recursion
const numberOfSteps5 = (num, count = 0) => {
  if (num === 0) return count;

  return num % 2 === 0
    ? numberOfSteps(num / 2, count + 1)
    : numberOfSteps(num - 1, count + 1);
};

// console.log(numberOfSteps(0)); // 0
// console.log(numberOfSteps(14)); // 6
// console.log(numberOfSteps(8)); // 4
