// Input: 
// N = 3
// arr[] = {1,2,3}
// Possible Answer: 2
// Generated Output: 1
// Explanation: index 2 is 3.
// It is the peak element as it is 
// greater than its neighbour 2.
// If 2 is returned then the generated output will be 1 else 0
function possiblepoutput(arr,n){
    let start=0;

    let end=n-1;

    while(start<end)

    {

        let mid=(start+end)/2;

        if(arr[mid]>arr[mid+1])

        {

            end=mid;

        }

        else

        {

            start=mid+=1;

        }

    }

    return start;

  }

console.log(possiblepoutput([1,2,3],3))