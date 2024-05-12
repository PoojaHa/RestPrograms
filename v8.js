function keyPair(arr,n,x){
    let map=new Map();
         for( let i=0;i<n;i++){
            findElement = x-arr[i];  //?
            console.log(findElement) //?
            if(map.has(findElement)){ //?
                return true;
            }else{
                map.set(arr[i],i);  //?
                console.log(map) //?
            }
            
        }
        return false;
    }
keyPair([1, 4, 45, 6, 10, 8],6,16)