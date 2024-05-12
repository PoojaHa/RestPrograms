
// Input:
// n = 5, m = 3
// a[] = {89, 24, 75, 11, 23}
// b[] = {89, 2, 4}

// Output: 1

// Explanation: 
// 89 is the only element 
// in the intersection of two arrays.
function intersectionarry(a,b){
   let i=0;
   let j=0;
   let count=0;
   while(a.length && b.length){
     if(a[i] ==b[j]){
          count++;
          i++;
          j++;
     }else if(a[i]< b[i]){
         i++;
     }else {
        j++
     }
   }
   
   return count
}
intersectionarry([89, 24, 75, 11, 23],[89, 2, 4])