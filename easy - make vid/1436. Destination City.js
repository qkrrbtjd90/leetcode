// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:
// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:
// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".

// Example 3:
// Input: paths = [["A","Z"]]
// Output: "Z"

// Constraints:
// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.

//* for || for of
const destCity1 = paths => {
	let from = [];
	let to = [];

	for (let i = 0; i < paths.length; i++) {
		from.push(paths[i][0]);
		to.push(paths[i][1]);
	}

	for (const val of to) {
		if (from.indexOf(val) === -1) return val;
	}
};

//! new Map | for of
const destCity2 = paths => {
	const map = new Map();

	for (const path of paths) {
		map.set(path[0], map.has(path[0]) ? 0 : 1);
		map.set(path[1], map.has(path[1]) ? 0 : -1);

		console.log(map);
	}

	for (const item of map) {
		if (item[1] === -1) return item[0];
	}
};

//! new Set | for of
const destCity3 = paths => {
	const set = new Set();

	for (const path of paths) set.add(path[0]);
	for (const path of paths) {
		if (!set.has(path[1])) return path[1];
	}
};

const destCity = paths => {
	const to = paths.reduce((acc, [from]) => {
		acc[from] = true;

		return acc;
	}, {});

	return paths.find(([, outTo]) => !to[outTo])[1];
};

console.log(
	destCity([
		['London', 'New York'],
		['New York', 'Lima'],
		['Lima', 'Sao Paulo'],
	])
);
console.log(
	destCity([
		['B', 'C'],
		['D', 'B'],
		['C', 'A'],
	])
);
console.log(destCity([['A', 'Z']]));
