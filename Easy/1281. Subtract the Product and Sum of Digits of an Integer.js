// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// Example 2:
// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

// Constraints:
// 1 <= n <= 10^5

//* reduce | split
const subtractProductAndSum1 = n => {
  const numArr = String(n).split('');

  const sum = numArr.reduce((acc, cv) => {
    return acc + Number(cv);
  }, 0);

  const product = numArr.reduce((acc, cv) => {
    return acc * Number(cv);
  }, 1);

  return product - sum;
};

//* parseInt | toString | split | for
const subtractProductAndSum = n => {
  let numArr = n.toString().split('') // can use String(n)
  let product = 1;
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    let num = parseInt(numArr[i]) // can use Number()

    product *= num;
    sum += num;
  }

  return product - sum
}

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
