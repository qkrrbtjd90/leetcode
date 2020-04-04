// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

//* for | includes
const numJewelsInStones1 = (j, s) => {
  const sStones = s.split('');
  const jStones = j.split('');

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let stone = sStones[i];

    if (jStones.includes(stone)) {
      count++;
    }
  }

  return count;
};

//! new Set | split | reduce || includes
const numJewelsInStones2 = (j, s) => {
   // set returns an array of values
  const jStones = new Set(j);

  //? can use inlcludes instead of has
  return s.split('').reduce((acc, cv) => jStones.has(cv) ? acc + 1 : acc, 0); 
};

//todo for | has | charAt | new Set
const numJewelsInStones = (j, s) => {
  const jStones = new Set(j);
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (jStones.has(s.charAt(i))) { // charAt gets the char at index
      count++;
    }
  }

  return count;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));

