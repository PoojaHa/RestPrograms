function plusOne(num){
let index =num.length-1;
  while(index >= 0){
   if(num[index] == 9 ){
      num[index] = 0 
   }else{
      num[index]+= 1
      return num
   }
   //after excecuting one if or else block it become --
    num--;
  }
//   arr.push(0);
//   arr[0]=1;
//   return arr
}
console.log(plusOne([129]))


function plusOne2(arr,n){
   let v=n-1;
   for(let i=n-1;i>0;i--){
     if(arr[i] <9){
        arr[i]++;
        return arr
     }else{
        arr[i]=0
     }
   }
   arr.push(0);
   arr[0]=1;
   return arr
    
}
console.log(plusOne2([1,2,9],3))