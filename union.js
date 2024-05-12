// Union of two arrays can be defined as the common and distinct elements in 
// the two arrays.
// Given two sorted arrays of size n and m respectively, find their union.


// Example 1:

// Input: 
// n = 5, arr1[] = {1, 2, 3, 4, 5}  
// m = 3, arr2 [] = {1, 2, 3}
// Output: 1 2 3 4 5
// Explanation: Distinct elements including 
// both the arrays are: 1 2 3 4 .
function Unionarray(a,b,n,m){
    let Intersection = []
    let i = 0;
    let j=0;
     
    while(i < n && j < m){
        if(a[i] == b[j]){
 
            // If duplicate already present in Intersection list
            if(Intersection.length > 0 && Intersection[Intersection.length-1] == a[i]){
                i+= 1
                j+= 1
            }
 
            // If no duplicate is present in Intersection list
            else{
                Intersection.push(a[i])
                i+= 1
                j+= 1
            }
        }
        else if(a[i] < b[j])
            i+= 1
        else
            j+= 1
    }
 
    if(!Intersection.length)
        return [-1]
    return Intersection
 
}
   

Unionarray([1, 2, 3, 2, 4,9],[1,2,3,2,7,8],6,6)