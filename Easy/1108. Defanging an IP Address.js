// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:
// The given address is a valid IPv4 address.

//* regex
const defangIPaddr1 = address => {
  return address.replace(/[.]/g, '[.]');
};

//* split | join
const defangIPaddr2 = address => {
  return address.split('.').join('[.]');
};

//* for of
const defangIPaddr3 = address => {
  const newAddress = address.split('');
  let result = '';

  for (let el of newAddress) {
    if (el === '.') result += '[.]';
    else result += el;
  }

  return result;
};

//* forEach | ternary
const defangIPaddr4 = address => {
  const newAddress = address.split('');
  let result = '';

  newAddress.forEach(el => (el === '.' ? (result += '[.]') : (result += el)));

  return result;
};

//! Array.from | map | join | ternary
const defangIPaddr5 = address => {
  return Array.from(address)
    .map(el => (el === '.' ? '[.]' : el))
    .join('');
}

//! split | map | join | ternary
const defangIPaddr = address => {
  return address
    .split('')
    .map(el => (el === '.' ? '[.]' : el))
    .join('');
}

console.log(defangIPaddr('1.1.1.1')); // "1[.]1[.]1[.]1"
console.log(defangIPaddr('255.100.50.0')); // "255[.]100[.]50[.]0"

