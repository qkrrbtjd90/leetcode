// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

// Example 2:
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.

// Example 3:
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

// Constraints:
// 1 <= num <= 10^4
// num's digits are 6 or 9.

//* String | Number | findIndex | split | join | includes
const maximum69Number1 = num => {
  let numStr = String(num).split('')
  let idx = numStr.findIndex(num => num === '6');

  if (!numStr.includes('6')) {
    return num;
  }

  numStr[idx] = '9'

  return Number(numStr.join(''));
}

//todo replace | toString | Number
//! replace without regex replaces only the 1st instance
const maximum69Number2 = num => {
  let str = num.toString(); // or String()
  let res = str.replace('6', '9');
  
  return Number(res); // or parseInt
}

//* for | replace | String
const maximum69Number3 = num => {
    let str = String(num);
    
    for (let i = 0; i < str.length; i++) {        
        if (str[i] === '6') return str.replace('6', '9'); // need to return so that we can exit of loop
    }
    
    return Number(str);
}

console.log(maximum69Number(9669))
console.log(maximum69Number(9996))
console.log(maximum69Number(9999))
