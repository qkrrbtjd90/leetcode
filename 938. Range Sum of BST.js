// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

// Note:
// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

// Definition for a binary tree  node

const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let current = this.root;

    if (!current) this.root = newNode;

    while (current) {
      if (current.value === value) return undefined;
      else if (value < current.value) {
        if (!current.left) current.left = newNode;
        else current = current.left;
      } else if (value > current.value) {
        if (!current.right) current.right = newNode;
        else current = current.right;
      }
    }

    return;
  }

  rangeSumBST(node ,L, R) {
    const sum = 0;
    let current = this.root

    if (!this.root) return sum;

    const { val, left, right } = this.root;


    return (
      (val >= L && val <= R ? sum + val : sum) +
      this.rangeSumBST(left, L, R) +
      this.rangeSumBST(right, L, R)
    );
  }
}
let BST = new BinarySearchTree();
// console.log(BST)

BST.insert(10);
// console.log(BST)

BST.insert(5);
// console.log(BST)

BST.insert(15);
BST.insert(3);
BST.insert(7);
BST.insert(18);

// console.log(util.inspect(BST, {depth: 5}))

console.log(BST.rangeSumBST(7, 15));

// const rangeSumBST = (root, L, R) => {
//   let sum = 0;

//   if (!root) return sum;

//   return (
//     (root.value >= L && root.value <= R ? sum + root.value : sum) +
//     rangeSumBST(root.left, L, R) +
//     rangeSumBST(root.right, L, R)
//   );
// };

var rangeSumBST = function (root, L, R) {
  const sum = 0;

  if (!root) return sum;

  const { val, left, right } = root;

  return (
    (val >= L && val <= R ? sum + val : sum) +
    rangeSumBST(left, L, R) +
    rangeSumBST(right, L, R)
  );
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));
// console.log(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10));
