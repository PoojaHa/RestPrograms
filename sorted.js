// Input:
// N = 5
// arr[] = {10, 20, 30, 40, 50}
// Output: 1
// Explanation: The given array is sorted.

function Sortedcheck(arr,n){
  let j=1;
  for(let i=0;i<n;i++){
    if(arr[i] >arr[j]){
     return false
    }else{
        j++;
    }
  }
  return true
}
Sortedcheck([10, 20, 30, 40, 50],5)