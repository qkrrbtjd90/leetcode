// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci].For each pair of[ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the increment to all indices.

// Example 1:
// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

// Example 2:
// Input: n = 2, m = 2, indices = [[1,1],[0,0]]
// Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.

// Constraints:
// 1 <= n <= 50
// 1 <= m <= 50
// 1 <= indices.length <= 100
// 0 <= indices[i][0] < n
// 0 <= indices[i][1] < m

// https://2ality.com/2018/12/creating-arrays.html

//* It creates a single object with a single reference. Even though there are several ros within the matrix, all the rows are actually the same underlying object
// let matrix = new Array(r).fill(new Array(c).fill(0))

//! for | forEach | Array.from
const oddCells1 = (n, m, indices) => {
  let count = 0;
  let matrix = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  for (let i = 0; i < indices.length; i++) {
    // get index values to increase
    let rIdx = indices[i][0];
    let cIdx = indices[i][1];

    // update row; in-place
    matrix[rIdx].forEach((cv, idx, array) => array[idx]++);

    // update columns; cv is each row in matrix
    matrix.forEach(row => row[cIdx]++);
  }

  matrix.forEach(arr => {
    arr.forEach(cv => (cv % 2 !== 0 ? count++ : null));
  });

  return count;
};

//! for of | forEach | Array.from
const oddCells2 = (n, m, indices) => {
  let count = 0;
  let matrix = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  for (const [r, c] of indices) {
    // update row at index r for all values; in-place
    matrix[r].forEach((cv, idx, array) => array[idx]++);
    // matrix[r].map((cv, idx, array) => array[idx]++) // this is not preferred

    // update column at index c for all rows in matrix
    matrix.forEach(row => row[c]++);
  }

  matrix.forEach(arr => {
    arr.forEach(cv => (cv % 2 !== 0 ? count++ : null));
  });

  return count;
};

//! new Array | for of | filter
const oddCells3 = (n, m, indices) => {
  const [rows, cols] = [new Array(n).fill(0), new Array(m).fill(0)];

  for (const [r, c] of indices) [rows[r]++, cols[c]++];

  const rowOdds = rows.filter(cv => cv % 2 !== 0).length;
  const rowEvens = rows.length - rowOdds;

  const colOdds = cols.filter(cv => cv % 2 !== 0).length;
  const colEvens = cols.length - colOdds;

  // (2 * 3) + (0 * 0)
  return rowOdds * colEvens + rowEvens * colOdds;
};

//! forEach | reduce
const oddCells4 = (n, m, indices) => {
  const [rows, cols] = [new Array(n).fill(0), new Array(m).fill(0)];

  indices.forEach(([r, c]) => {
    rows[r] = !rows[r];
    cols[c] = !cols[c];
  });

  const rowOdds = rows.reduce((acc, cv) => (cv ? acc + 1 : acc), 0);
  const colOdds = cols.reduce((acc, cv) => (cv ? acc + 1 : acc), 0);

  // For rowOdds * m, all rows with a true value are counted.
  // But the intersections where the column is also true should be removed (because of row: true + column: true = false).
  // For colOdds * n, the intersections with a false value (row and column are both true) are removed in the same way.
  // Therefore rowOdds * colOdds is deducted two times (like: rowOdds * m - rowOdds * colOdds + colOdds * n - rowOdds * colOdds).
  return rowOdds * m + colOdds * n - 2 * rowOdds * colOdds;
};

//! Set | had | delete | add | size
const oddCells5 = (n, m, indices) => {
  const rows = new Set();
  const cols = new Set();

  indices.forEach(indice => {
    let r = indice[0];
    let c = indice[1];

    rows.has(r) ? rows.delete(r) : rows.add(r);
    cols.has(c) ? cols.delete(r) : cols.add(r);
  });

  return rows.size * m + cols.size * n - rows.size * cols.size * 2;
};

const oddCells6 = (n, m, indices) => {
  const rows = new Uint8Array(n);
  const cols = new Uint8Array(m);
  let rowOdds = 0;
  let colOdds = 0;

  for (let i = 0; i < indices.length; ++i) {
    const [r, c] = indices[i];

    ++rows[r] & (1 === 1) ? ++rowOdds : --rowOdds;
    ++cols[c] & (1 === 1) ? ++colOdds : --colOdds;
  }

  return rowOdds * m + colOdds * n - 2 * rowOdds * colOdds;
};

//! Array.from | for |forEach
const oddCells7 = (n, m, indices) => {
  let count = 0;
  let matrix = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  // iterate through indices
  for (const [r, c] of indices) {
    // update col
    for (let i = 0; i < n; i++) matrix[i][c]++;
    // update row
    for (let i = 0; i < m; i++) matrix[r][i]++;
  }

  matrix.forEach(arr => {
    arr.forEach(cv => (cv % 2 !== 0 ? count++ : null));
  });

  return count;
};

const oddCells8 = (n, m, indices) => {
  let count = 0;
  const [rows, cols] = [new Array(n).fill(0), new Array(m).fill(0)];

  for (const [r, c] of indices) {
    rows[r] = !rows[r];
    cols[c] = !cols[c];
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      count += rows[r] + cols[c] === 1 ? 1 : 0;
    }
  }

  return count;
};

const oddCells9 = (n, m, indices) => {
  let count = 0;
  let [rows, cols] = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  for (const [r, c] of indices) {
    rows[r]++;
    cols[c]++;
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      count += (rows[r] + cols[c]) % 2;
    }
  }

  return count;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);

console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0],
  ])
);
