// Input:
// n = 7
// arr[] = {1, 5, 3, 4, 3, 5, 6}
// Output: 2
// Explanation: 
// 5 is appearing twice and 
// its first appearence is at index 2 
// which is less than 3 whose first 
// occuring index is 3.
function occurence(arr,n){
   // repeating element
   let min = -1;
 
   // Creates an empty hashset
   let set = new Set();

   // Traverse the input array from right to left
   for(let i = arr.length - 1; i >= 0; i--)
   {
        
       // If element is already in
       // hash set, update min
       if (set.has(arr[i]))
        //console.log(set)
           min = i;
           
            
       // Else add element to hash set
       else 
           set.add(arr[i]);
   }
   
   // Print the result
   if (min != -1)
     console.log("The first repeating element is " +min);
   else
     console.log("There are no repeating elements");
}

console.log(occurence([1, 5, 3, 4, 3, 5, 6],7))