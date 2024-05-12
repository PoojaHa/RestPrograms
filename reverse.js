// Input:
// 5
// 111 222 333 444 555

// Output)
function reverse(num){
  let rev=0;
  let temp;
  while(num!=0){
    temp = num%10;
    rev = (rev *10) + temp;
    num =Math.floor(num/10)
  }
  return rev
}
reverse(123)
function reverse2(num){
    let n=num.split('');
    let i=0;
    let j=n.length-1;
    let temp;
    while(i<j){
        temp=n[i];
        n[i]=n[j];
        n[j]=temp;
        i++;
        j--;
    }
    let  arr=n.join("");
    
    if(arr==num){
        return true
    }
    return false
  }
  let a="pooja"
  console.log(reverse2(a))


  


    
    function PalinArray(arr,n){
        for (const item of arr) {
            if (!isStringPalin(item.toString())) {
                return 0
            }
        }
        
        return 1
    }


function isStringPalin(str) {
    let l = 0
    let r = str.length - 1
    
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        
        l++
        r--
    }
    
    return true
}
PalinArray([ 111, 222, 333, 444 ,555],5)




    
    function PalinArray2(arr,n){
        //code here
        
        for(let i=0; i<n; i++){
            
            let flag = true;
            let num = arr[i].toString()
             let start = 0;
            let end = num.length-1;
            // console.log(start , end)
            while(start <= end){
                
                if(num[start] != num[end]){
                    flag = false;
                    break;
                }
                
                start++;
                end--;
            }
            
            if(flag === false)return 0;
        }
        
        return 1;
    }

    PalinArray2([111, 222, 333, 444 ,555],5)

    


    
   function  PalinArray3(arr,n){
        //code here
        let flag=true;
      for(let i=0;i<n;i++){
        let temp=arr[i].toString();
        let start=0;
        let end= temp.length-1;
        while(start<=end){
            if(temp[start]!=temp[end]){
                flag=false;
                break;
            }
            start++;
            end--;
        }
        if(flag==false){
            return 0
        }
      }
      return 1;
    }

    PalinArray3([111, 222, 333, 444 ,555],5)