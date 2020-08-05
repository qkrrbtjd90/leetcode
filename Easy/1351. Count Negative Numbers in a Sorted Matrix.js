// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.

// Return the number of negative numbers in grid.

// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0

// Example 3:
// Input: grid = [[1,-1],[-1,-1]]
// Output: 3

// Example 4:
// Input: grid = [[-1]]
// Output: 1

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

//* nested loop
const countNegatives1 = grid => {
	let count = 0;

	for (let i = 0; i < grid.length; i++) {
		// loop starting from back because it's lowest;
		for (let j = grid[i].length - 1; j >= 0; j--) {
			if (grid[i][j] < 0) count++;
			// loop out if num is positive
			else break;
		}
	}

	return count;
};

//* nested loop
const countNegatives2 = grid => {
	let count = 0;

	for (let i = 0; i < grid.length; i++) {
		// if 1st number in row is negative;
		if (grid[i][0] < 0) {
			// add length of row * left over matrix
			count += grid[i].length * (grid.length - i);
			break;
		}
		for (let j = grid[i].length - 1; j >= 0; j--) {
			if (grid[i][j] < 0) count++;
			else break;
		}
	}

	return count;
};

//* reduce | concat | filter | length
const countNegatives3 = grid => {
	return grid
		.reduce((acc, cv) => acc.concat(cv)) // flatten array
		.filter(n => n < 0).length;
};

//! flat | reduce | map
//! flat will work with Node 11
const countNegatives4 = grid => {
	let x = grid
		.flat()
		.map(cv => (cv < 0 ? 1 : 0))
		.reduce((acc, cv) => acc + cv);

	return x;
};

//! Binary search with helper function
const countNegatives5 = grid => {
	let count = 0;

	for (const row of grid) {
		const idx = searchNegative(row);
		count += row.length - idx;
	}

	return count;
};

const searchNegative = arr => {
	let r = arr.length - 1;
	let l = 0;

	while (l <= r) {
		const mid = Math.floor((l + r) / 2);

		if (arr[mid] < 0) r = mid - 1;
		else l = mid + 1;
	}

	return l;
};

//todo concat | filter | length
const countNegatives6 = grid => {
	return [].concat(...grid).filter(cv => cv < 0).length;
};

//todo reduce | filter | length
const countNegatives7 = grid => {
	return grid.reduce((acc, cv) => acc + cv.filter(n => n < 0).length, 0);
};

const countNegatives = grid => {
	const height = grid.length;
	const width = grid[0].length;
	let r = height - 1;
	let c = 0;
	let count = 0;

	while (r >= 0 && c < width) {
		if (grid[r][c] >= 0) c++;
		else {
			count += width - c;
			r--;
		}
	}

	return count;
};

console.log(
	countNegatives([
		[4, 3, 2, -1],
		[3, 2, 1, -1],
		[1, 1, -1, -2],
		[-1, -1, -2, -3],
	])
);
console.log(
	countNegatives([
		[3, 2],
		[1, 0],
	])
);
console.log(
	countNegatives([
		[1, -1],
		[-1, -1],
	])
);
console.log(countNegatives([[-1]]));
