
function trappingwater(arr,n){
    let left=[n];
    let right=[n];
    let leftMax = arr[0]
    let rightMax= arr[n-1]
     for(let i=0;i<n;i++){
        leftMax = Math.max(leftMax , arr[i]);
        left[i] = leftMax;

    }
    left


            

    for(let i=n-1;i>=0;i--){

        rightMax = Math.max(rightMax , arr[i]);

        right[i] = rightMax;

    }
   right
   left 
   let min;
   let sum=0;
   for(let  i=0;i<n;i++){
     min =Math.min(right[i],left[i]) 
     arr[i]=min-arr[i];
     sum+=arr[i]
   }
  
}
trappingwater([7,4,0,9],4)