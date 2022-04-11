const a = [1, 2, 3, 4, 5];
const n = a.length;
let min_index = 0;
let max_index = n - 1;
const maxValue = a[n - 1] + 1;
for (let i = 0; i < n; i++) {
  if (i % 2 === 0) {
    a[i] = (a[max_index] % maxValue) * maxValue + a[i];
    max_index--;
  } else {
    a[i] = (a[min_index] % maxValue) * maxValue + a[i];
    min_index++;
  }
}

for (let i = 0; i < n; i++) {
  a[i] = Math.floor(a[i] / maxValue);
}

console.log(a);

// Rearrange Array Alternately
// Medium Accuracy: 50.0% Submissions: 67884 Points: 4
// Lamp Geeks Summer Carnival is LIVE NOW
// Given a sorted array of positive integers. Your task is to rearrange  the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.

// Example 1:

// Input:
// N = 6
// arr[] = {1,2,3,4,5,6}
// Output: 6 1 5 2 4 3
// Explanation: Max element = 6, min = 1,
// second max = 5, second min = 2, and
// so on... Modified array is : 6 1 5 2 4 3.
// Example 2:

// Input:
// N = 11
// arr[]={10,20,30,40,50,60,70,80,90,100,110}
// Output:110 10 100 20 90 30 80 40 70 50 60
// Explanation: Max element = 110, min = 10,
// second max = 100, second min = 20, and
// so on... Modified array is :
// 110 10 100 20 90 30 80 40 70 50 60.
// Your Task:
// The task is to complete the function rearrange() which rearranges elements as explained above. Printing of the modified array will be handled by driver code.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(1).

// URL: https://practice.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1/?page=1&company[]=Zoho&sortBy=submissions#
