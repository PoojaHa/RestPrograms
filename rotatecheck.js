// Input:
// N = 5
// Arr[] = {5, 1, 2, 3, 4}
// Output: 1
// Explanation: The given array is 5 1 2 3 4. 
// The original sorted array is 1 2 3 4 5. 
// We can see that the array was rotated 
// 1 times to the right.


function array(arr){
    let cont=0;
    let rotate=false;


    for(let i=0;i+1<arr.length;i++){

        if(arr[i]<arr[i+1]){

            cont++;

        }

        else if(arr[i]>arr[i+1]){

            cont++;

            rotate=true;

            break;

        }

    }
    if(rotate){

        return cont;

    }

    return 0;
  }

array([5, 1, 2, 3, 4])

function array2(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        return i+1
    }
  }
  return 0;
}
array2([5, 1, 2, 3, 4])

function array3(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        count=i+1
      }
    }
    return count;
  }
  array3([5, 1, 2, 3, 4])

  function array4(arr){
    let minidex=arr[0];
    let index=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>minidex){
            minidex=arr[i]
            index=i
        }
    }
    return index

  }
  array4([5, 1, 2, 3, 4])