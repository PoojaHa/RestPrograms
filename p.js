function permutation(a,b){
 let map=new Map();
 let s1=new Set();
 let s2=new Set();
 let count=0;
//  for(let i=0;i<a.length;i++){
//     if(map.has(a[i])){
//       map.set(a[i] ,map.get(a[i]+1))
//     }
//     map.set(a[i],1)
//  }
//   for(let j=0;j<b.length;j++){
//    if(map.has(b[j])){
//       count++
//    }
//   }
  for(let i=0;i<a.length;i++){
    s1.add(a[i])
  }
  for(let i=0;i<b.length;i++){
    s2.add(b[i])
  }
   s1.forEach((value)=>{
     map.set(value,value)
   })
   s2.forEach((value)=>{
     if(map.has(value)){
        count++
     }
   })
   return count
}
permutation([1, 2, 3, 4, 5, 6],[3, 4, 5, 6, 7])