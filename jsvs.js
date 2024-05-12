function indElement(arr, n) {
    let greater = arr[0]
    let greaterArray = {}
    let smaller = arr[arr.length - 1]
    let re = -1
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] >= greater) {
        greaterArray[arr[i]] = 1
        greater = arr[i]
      }
    }
    
    for (let i = arr.length - 2; i > 0; i--) {
      if (arr[i] <= smaller) {
        if (greaterArray[arr[i]]) {
          re = arr[i]
        }
        smaller = arr[i]
      }
    }
    
    return re
  }
  indElement([4, 2, 5, 7],4)
// function check(arr,n){

// function checkLeft(el,index){
//     return arr.slice(0,index).every(x=>x<=el)

// }

// function checkRight(el,index){
//     return arr.slice(index+1).every(x=>x>=el) 
// }

// for (let i=0; i<arr.length; i++) {
//     if (i !== 0 && i !== arr.length-1 && checkLeft(arr[i], i) && checkRight(arr[i], i)) {
//         res = arr[i];
//         break;
//     }
   
// }
 
// }
// check([4, 2, 5, 7],4)