function findFirstAndLast(arr,x){
    let first=-1;
    let second=-1;
    for(let i=0;i<arr.length;i++){
        if(x!=arr[i]){
            continue;
        }
        if(first == -1)
           first=i
           second=i
    }  
    return [first,second]
}
 
	
	let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
	let x = 2;
	console.log(findFirstAndLast(arr, x));
	