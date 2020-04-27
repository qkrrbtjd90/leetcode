// 709. To Lower Case

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

//* for of
const toLowerCase1 = str => {
  let alphaObj = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
  };

  let result = '';

  for (let char of str) {
    if (alphaObj[char]) result += alphaObj[char]
    else result += char
  }

  return result;
};

//! forEach | split | charCodeAt | fromCharCode
const toLowerCase2= str => {
  let result = '';

  str.split('').forEach((s, idx) => {
    let code = str.charCodeAt(idx);

    if (code >= 65 && code < 97) {
      code += 32
    }

    result += String.fromCharCode(code)
  })

  return result;
}

//! split | reduce | charCodeAt | fromCharCode
const toLowerCase = str => {
  return str.split('').reduce((prev, cv) => {
    let code = cv.charCodeAt(0);

    if (64 < code && 91 > code) {
      return prev + String.fromCharCode(32 + code);
    }

    return prev + cv
  }, '')
}

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));
