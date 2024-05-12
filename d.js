// Input:
// N = 6
// arr[] = {3, 6, 12, 1, 5, 8}
// Output:
// 1
// Explanation:
// 6 3 12 1 8 5 is a possible solution.
// The output will always be 1 if your
// rearrangement is correct.
// Example 2:
// Input:
// N = 4
// arr[] = {1, 2, 3, 4}
// Output :
// 1
// //check next less than first means swap
 function swap(arr){
    let  temp;
    let flag =true;
    if(flag== true){
        for(let i=0;i<arr.length;i++){
            if(arr[i] < arr[i+1])
              temp =arr[i];
              arr[i]=arr[i+1]
              arr[i+1]=temp;
    }
}else{
 if(flag==false){
          if(arr[i] > arr[i+1])
           temp =arr[i];
           arr[i]=arr[i+1]
           arr[i+1]=temp;
       }
    }
      flag=!flag
      return arr
}
    
    
  
   
 
 console.log(swap([3, 6, 12, 1, 5, 8]))