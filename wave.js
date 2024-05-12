// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
// In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

// If there are multiple solutions, find the lexicographically smallest one.

// Example 1:

// Input:
// n = 5
// arr[] = {1,2,3,4,5}
// Output: 2 1 4 3 5
// Explanation: Array elements after
// sorting it in wave form are
// 2 1 4 3 5.

function wavearray(arr, n) {
  var temp;``
  for (let i = 0; i < n; i++) {
     let  temp =arr[i];
      arr[i] = arr[i+1]
      arr[i+1]=temp;
      break;
  }
  for (let i = n-3; i < n; i++) {
    let  temp =arr[i];
     arr[i] = arr[i+1]
     arr[i+1]=temp;
     break;
 }
 
  return arr
}
wavearray([1,2,3,4,5], 5);
