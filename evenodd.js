// N = 6
// arr[] = {3, 6, 12, 1, 5, 8}
// Output:
// 1
// Explanation:
// 6 3 12 1 8 5 is a possible solution.
// The output will always be 1 if your
// rearrangement is correct.
 function evenOdd(arr){
    //6 12 8  3  1 5
    //3, 6, 12, 1, 5, 8
   let evens = [];
   let odds = [];
   for(let i = 0; i < arr.length ; i++){
      if(arr[i]%2==0){
       evens.push(arr[i])
      }else{
       odds.push(arr[i])
      }
   }
  
  i=0;
  let p=0;
  let n=0;
   while(p<evens.length&& n<odds.length){
    
    if(i%2==0){
        arr[i]=evens[p];
        p++;
    }
     else if(i%2!=0) {
        arr[i]=odds[n];
        n++;
    }

       i++;

   }
 }
 evenOdd([3, 6, 12, 1, 5, 8])