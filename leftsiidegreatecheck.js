// Element with left side smaller and right side greater
// Input:
// N = 4
// A[] = {4, 2, 5, 7}
// Output:
// 5
// Explanation:
// Elements on left of 5 are smaller than 5
// and on right of it are greater than 5.
function check(arr,n){
let ele=-1;
var leftMax = Array(n).fill(0);
var rightMin= Array(n).fill(0);
leftMax[0] = arr[0];
rightMin[n-1]=arr[n-1]
for(i = 1; i < n; i++){
leftMax[i] = Math.max(leftMax[i - 1],arr[i - 1]);

} 
leftMax
 for(let i=n-2; i>=0; i--){
 rightMin[i] = Math.min(rightMin[i+1],arr[i]);
 console.log(rightMin[i+1])
}
rightMin
   for(let i=0;i<n;i++){
    if(i!=0 && i!=n-1 && leftMax[i]==rightMin[i]){
      ele=leftMax[i];
      break;
    }
   }
   for(let i = 1; i < n - 1; i++){
    if(leftMax[i] <= arr[i] && rightMin[i] >= arr[i]){
        return arr[i];
        
    }

}
return -1;
   
}
check([4, 2, 5, 7],4)