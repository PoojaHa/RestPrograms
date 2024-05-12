// Input:
// N = 5
// arr[] = {2, 3, 2, 3, 5}
// P = 5
// Output:
// 0 2 2 0 1
// Explanation: 
// Counting frequencies of each array element
// We have:
// 1 occurring 0 times.
// 2 occurring 2 times.
// 3 occurring 2 times.
// 4 occurring 0 times.
// 5 occurring 1 time.

function frequrncy(arr,n){
 let b=Array(6).fill(0);
   let m=new Map();
  for(let i=0;i<n;i++){
    b[arr[i]]++
 }

  for(let i=0;i<n;i++){
      if(!m.has(i)){
        m.set(arr[i],1);
      }else{
        m.set(arr[i], m.get(arr[i]) + 1);
     
      }
  }
let j=1;

  for(let i=0;i<n;i++){

      if(m.has(j)){

          arr[i]=m.get(j);

          j++;

      }else{

          arr[i]=0;

          j++;

      }

  }

}
frequrncy([2, 3, 2, 3, 5],5)

