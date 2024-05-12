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

// function occurence(arr,n){
//  let max=Infinity;
//  let s=""
//  for(let i=0;i<arr.length;i++){
//   if(arr[i].length < max)
//     s=arr[i]
//     max =arr[i].length
//  }
//  max
// }
// let input=["geeksforgeeks", "geeks", "geek", "geezer"];
// console.log(occurence(input))


function name(){
  console.log("helk")
}
name()

let another =function(){
  console.log("fghjk")
}
another()

let another2 = () => {
   console.log("gfhjjk");
}
another2()
 let another3 = ((a,b)=> { return a+b })
 console.log(another3(2,3))

 let another4 = ((a,b)=>(a+b))
 console.log(another4(2,3))

 let anonoms = function(a,b){
   return a+b
 }
 console.log(anonoms(5,6))