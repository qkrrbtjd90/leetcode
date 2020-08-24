// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted[-5, -1, 1, 2, 3], [-3, -1, 2, -2, 4].

// Example 2:
// Input: n = 3
// Output: [-1, 0, 1]

// Example 3:
// Input: n = 1
// Output: [0]

// Constraints:
// 1 <= n <= 1000

// since range is 1 to n; we start at 1
const sumZero2 = n => {
  let result = n % 2 !== 0 ? [0] : [];

  for (let i = 1; i <= n / 2; i++) {
    result.push(i, -i);
  }

  return result;
};

const sumZero3 = n => {
  const result = new Int16Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = i * 2 - n + 1;
  }

  return result;
};

console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));
console.log(sumZero(1));
console.log(sumZero(0));
