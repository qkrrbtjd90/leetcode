// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Example 1:
// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

// Example 2:
// Input: startTime = [4], endTime = [4], queryTime = 4
// Output: 1
// Explanation: The only student was doing their homework at the queryTime.

// Example 3:
// Input: startTime = [4], endTime = [4], queryTime = 5
// Output: 0

// Example 4:
// Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
// Output: 0

// Example 5:
// Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,11,10,10,10,10,10,10,10], queryTime = 5
// Output: 5

// Constraints:
// startTime.length == endTime.length
// 1 <= startTime.length <= 100
// 1 <= startTime[i] <= endTime[i] <= 1000
// 1 <= queryTime <= 1000

//* for
const busyStudent1 = (startTime, endTime, queryTime) => {
  let count = 0;

  for (let i = 0; i < startTime.length; i++) {
    let start = startTime[i];
    let end = endTime[i];

    if (start <= queryTime && queryTime <= end) count++;
  }

  return count;
};

//* for | pre-increment
//! works with post increment too
const busyStudent2 = (startTime, endTime, queryTime) => {
  let count = 0;

  for (let i = 0; i < startTime.length; i++) {
    startTime[i] <= queryTime && queryTime <= endTime[i] && count++;
  }

  return count;
};

//! filter | length
const busyStudent3 = (startTime, endTime, queryTime) =>
  startTime.filter((cv, idx) => queryTime >= cv && queryTime <= endTime[idx])
    .length;

//! reduce
const busyStudent4 = (startTime, endTime, queryTime) =>
  startTime.reduce(
    (acc, cv, idx) =>
      queryTime >= cv && queryTime <= endTime[idx] ? acc + 1 : acc,
    0,
  );

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
console.log(busyStudent([4], [4], 4));
console.log(busyStudent([4], [4], 5));
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7));
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 11, 10, 10, 10, 10, 10, 10, 10],
    5,
  ),
);
