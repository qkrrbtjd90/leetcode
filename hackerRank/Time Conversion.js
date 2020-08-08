// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Input Format
// A single string  containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01 <= hh <= 12 and 00 <= mm, ss <=59.

// Constraints
// All input times are valid
// Output Format

// Convert and print the given time in 24-hour format, where 00 <= hh <=23.

// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

const timeConversion = s => {
	const time = s.split(':');

	if (time[0] === '12' && time[2].includes('AM')) time[0] = '00';
	else if (time[2].includes('PM') && time[0] === '12') time[0] = '12';
	else if (time[2].includes('PM')) time[0] = Number(time[0]) + 12;

	time[2] = time[2].slice(0, 2);

	return time.join(':');
};

const timeConversion2 = s => {
	if (s === '12:00:00AM') return '00:00:00';

	let time = s.split(':');
	let hour = time[0];
	let min = time[1];
	let sec = time[2].slice(0, 2);

	if (s.includes('PM') && hour == 12) {
		return '12' + ':' + min + ':' + sec;
	} else if (s.includes('PM')) {
		return Number(hour) + 12 + ':' + min + ':' + sec;
	} else if (s.includes('AM') && hour == 12) {
		return '00' + ':' + min + ':' + sec;
	} else {
		return hour + ':' + min + ':' + sec;
	}
};

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('07:05:45AM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('12:40:22AM'));
console.log(timeConversion('12:45:54PM'));
