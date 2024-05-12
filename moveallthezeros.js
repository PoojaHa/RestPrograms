// Input:
// N = 5
// Arr[] = {3, 5, 0, 0, 4}
// Output: 3 5 4 0 0
// Explanation: The non-zero elements
// preserve their order while the 0
// elements are moved to the right.

function move(arr,n){
  //let zero=[];
//     let k=0;
//   for(let i=0;i<n;i++){
//     if(arr[i]==0){
//         zero.push(arr[i])
//         arr.splice(i,1);
//         i--;
//         continue;
//     }
//   }

//    let newarr=arr.concat(zero)
//    return newarr
let zero=[];
//   for(let i=0;i<n;i++){
//     if(arr[i]!=0){
//         zero.push(arr[i])
//     }
//   }

//   for(let i=0;i<n;i++){

//     if(arr[i]==0){
//         zero.push(arr[i])
//     }
//   }
//   for(let i=0;i<n;i++){
//     arr[i]=zero[i]
//   }
  let countzero=0;
  let temp=[];
  let j=0;
  for(let i=0;i<n;i++){
  if(arr[i]==0){
    countzero++;
  }else if(arr[i]!=0){
    temp[j]=arr[i];
    j++
  }
  
  
  }
  
  
}
move([3, 5, 0, 0, 4],5)