// Given a sorted array containing only 0s and 1s, find the transition point. 


// Example 1:

// Input:
// N = 5
// arr[] = {0,0,0,1,1}
// Output: 3
// Explanation: index 3 is the transition 
// point where 1 begins.

function TransitionPoint(arr,n){
  
    let i=0;
    let j=n-1;
    let ans=-1;
    while(i<=j)
    {
        let mid=Math.floor((i+j)/2)
        if(arr[mid]==1)
        {
            ans=mid;
            j=mid-1;
        }
        else
        {
            i=mid+1;
        }
    }
    return ans;
  }
  
console.log(TransitionPoint([0,0,0,1,1],5))

// for(let i=0;i<n;i++){

//     if(arr[i]==1)

//     return i;

// }



return -1;