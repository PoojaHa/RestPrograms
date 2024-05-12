// A[] = {1, 2, 4, 5, 7}
// B[] = {5, 6, 3, 4, 8} 
// X = 9 
// Output: 
// 1 8
// 4 5 
// 5 4
// Explanation:
// (1, 8), (4, 5), (5, 4) are the
// pairs which sum to 9.
function pairssum(a,b,x){
    a.sort((a,b)=>a-b); //?
    b.sort((a,b)=>a-b); //?
  let i=0;
  let j=a.length-1;
  let s=[];
while(i< a.length & j>=0){
    if(a[i]+b[j] == x){ 
      s.push(a[i],b[j]) 
      i++;
      j--;
      continue; 
   }else if(a[i]+b[j]<x){
     i++
   }else{
     j--
   }
  }
  
  return s
  
}
console.log(pairssum([1, 2, 4, 5, 7],[5, 6, 3, 4, 8],9))