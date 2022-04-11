function totalCount(arr, n, k) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (count[i] < k) {
      count += 1;
    } else {
      let q = Math.floor(arr[i] / k);
      count += q;
      if (arr[i] % k !== 0) {
        count += 1;
      }
    }
  }
  console.log(count);
}

const n = 4;
const k = 3;
const arr = [5, 8, 10, 1];

totalCount(arr, n, k);

// total count

// Given an array Arr of N positive integers and
// a number K where K is used as a threshold value
// to divide each element of the array into sum of
// different numbers. Find the sum of count of the
// numbers in which array elements are divided.

// Example 1:

// Input:
// N = 4, K = 3
// Arr[] = {5, 8, 10, 13}
// Output: 14

// Explanation: Each number can be expressed as sum
// of different numbers less than or equal to K as
// 5 (3 + 2), 8 (3 + 3 + 2), 10 (3 + 3 + 3 + 1),
// 13 (3 + 3 + 3 + 3 + 1). So, the sum of count
// of each element is (2+3+4+5)=14.

// Example 2:

// Input:
// N = 5, K = 4
// Arr[] = {10, 2, 3, 4, 7}
// Output: 8

// Explanation: Each number can be expressed as sum of
// different numbers less than or equal to K as
// 10 (4 + 4 + 2), 2 (2), 3 (3), 4 (4) and 7 (4 + 3).
// So, the sum of count of each element is
// (3 + 1 + 1 + 1 + 2) = 8.
