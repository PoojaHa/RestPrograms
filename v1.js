// nput:
// n = 5
// A[] = {1,2,3,4,0}
// Output: 4 0

// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
//    2,3,4,5,16,17
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.
function rigtShhift(arr,n){
    // arr.sort((a,b)=>b-a)
    // let max=-Infinity;
    // let min=Infinity;
    // let seconmax;
    // let secondmin;
    // for(let i=1;i<arr.length;i++){
    //     if(arr[i]>max){
    //         seconmax=max;
    //         max=arr[i]
    //     }else if(arr[i]> seconmax  && seconmax != max){
    //         seconmax=arr[i]
    //     }
    // }
    // for(let i=1;i<arr.length;i++){
    //     if(arr[i]<min){
    //         secondmin=min
    //         min=arr[i]
    //     }else if(arr[i]< secondmin  && secondmin != min){
    //         secondmin=arr[i]
    //     }
    //   }

    //   return [max,min,seconmax]


        // code here

        var array=[];

        let max =-999999;
        console.log(max)

        for (let i=n-1; i>0;i--){

            if (arr[i]>=max){

                max=arr[i];

                array.unshift(max);

            }

        }

        return array;

    }



rigtShhift([16,17,4,3,5,2],6)