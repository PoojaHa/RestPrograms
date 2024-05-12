// put:
// N = 7
// A[] = {2,4,6,8,9,10,12}
// B[] = {2,4,6,8,10,12}
// Output: 4
// Explanation: In the second array, 9 is
// missing and it's index in the first array
// is 4.

function aray(a,b){
  let i=0;
  let j=0;
  while(i<a.length && j<b.length){
    if(a[i]!=b[j]){
        return i;
    }
    i++;
    j++;
  }
   return a.length-1;
}
aray([2,4,6,8,9,10,12],[2,4,6,8,10,12])

function aray2(a,b){
   for(let i=0;i<n;i++){
     if(a[i]!=b[i]){
        return i
     }
   }
   return -1
  }
  aray2([2,4,6,8,9,10,12],[2,4,6,8,10,12])
 aray3([2,4,6,8,9,10,12],[2,4,6,8,10,12])