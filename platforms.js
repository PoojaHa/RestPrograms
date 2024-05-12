// N = 5
// Ar1[] = {1, 2, 4, 6, 10}
// Ar2[] = {{4, 5, 6, 9, 12}
// Output: 11
// Explanation: The merged array looks like
// {1,2,4,4,5,6,6,9,10,12}. Sum of middle
// elements is 11 (5 + 6).
 function middleelement(arr1,arr2){
   let v=[];
   for(let i=0;i<arr1.length;i++){
     v.push(arr1[i])
   }
   for(let i=0;i<arr2.length;i++){
    v.push(arr2[i])
  }
  v.sort((a,b)=>{return a-b});
    
     let i=0;
     let j =v.length-1;
      while(i<j){
        i++;
        j--;
      }
      
      let arrsum= v[i]+v[j]

     return arrsum
 }
 middleelement([1, 2, 4, 6, 10],[4, 5, 6, 9, 12])

 function middleelement2(arr1,arr2,n){
    let v=[];
     let i=0;
     let j=0;
     let k=0;
     while(i<n && j<n){
        if(arr1[i]<=arr2[j]){
            v.push(arr1[i]);
            i++;
        }else{
            // arr1 and arr2 pointing same =v so arr2[j]=v 
            v.push(arr2[j]);
            j++;
        }
        k++
     }
     //those who left in i and j
            while(i<n)
            {
                v.push(arr1[i++]);
            }
            while(j<n)
            {
                v.push(arr2[j++]);
                
            }
          return v[n]+v[n-1]
  }
  middleelement2([1, 2, 4, 6, 10],[4, 5, 6, 9, 12],5)