// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// Note:
// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

// ASCI II
// a = 97
// z = 122

//* new Map | new Set
const uniqueMorseRepresentations1 = words => {
  const code = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const map = new Map();
  const result = new Set();

  // map alphabet to code;
  for (let i = 0; i < code.length; i++) {
    map.set(String.fromCharCode(i + 97), code[i]);
  }

  // convert and push to result
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let codeWord = '';

    // convert each char to code
    for (let j = 0; j < word.length; j++) {
      codeWord += map.get(word[j]);
    }

    result.add(codeWord);
    codeWord = ''; // reset codeWord
  }

  return result.size;
};

//* new Set
const uniqueMorseRepresentations2 = words => {
  const code = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  // map alphabet to code
  const codeMap = code.reduce((acc, cv, i) => {
    acc[String.fromCharCode(i + 97)] = cv;
    return acc;
  }, {});

  let codeWords = new Set();

  // convert word to code
  words.forEach(word => {
    let codeWord = '';

    for (let char of word) {
      codeWord += codeMap[char];
    }

    codeWords.add(codeWord);
  });

  return codeWords.size;
};

//! simplest
const uniqueMorseRepresentations = words => {
  const code = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const codeMap = code.reduce((acc, cv, i) => {
    acc[String.fromCharCode(i + 97)] = cv;
    return acc;
  }, {});

  return new Set(
    words.map(word =>
      word
        .split('')
        .map(char => codeMap[char])
        .join('')
    )
  ).size;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
console.log(uniqueMorseRepresentations(['a']));
