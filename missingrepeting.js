// N = 2
// Arr[] = {2, 2}
// Output: 2 1
// Explanation: Repeating number is 2 and 
// smallest positive missing number is 1.

function RepeatingNumber(arr,n){
  let m=new Map();
 let ans=[];
 let a=0;
  for(let i=0;i<n;i++){
    if(m.has(arr[i])){
   m.set(arr[i], m.get(arr[i]) + 1);
}else{
        m.set(arr[i],1)
    }
  }
  for(let i=0;i<n;i++){
     if(m.get(arr[i])==2){
       // console.log(m.get(arr[i]))
      ans[0]=arr[i]
    }
    
  }
  for(let i=1;i<n;i++){
    if(!m.get(i)==1){
        ans[1]=i
    }
  }
  
}
RepeatingNumber([2,2],2)

function RepeatingNumber2(arr,n){
    let el = {}
    let ans=[];
    let freq = Array(n+1);
        
        for(let i = 0; i<n; i++){
            freq[arr[i]]++;
        }
        
        for(let i=0;i<n;i++){
         const element = arr[i];
         if(!el[element]){
             el[element] =1
         }else{
             el[element]++
         }
        }
        for(let i=1;i<n;i++){
            if(el[arr[i]]==2){
             ans[0]= arr[i]
            }
            if(el[arr[i]]==0){
                ans[1]= i
               }
               
        }
    }
    
  RepeatingNumber2([2,2],2)


function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}



// Function to find the repeating and missing element
function missingandreapeating(arr,n){
    let numberMap = new Map();
     
for(let i of arr)
{
    if (numberMap.has(i) == false) {
        numberMap.set(i,true);
        
    }
    else
    {
       console.log("Repeating = ",i); 
    }
}
for(let i=1;i<n;i++){
    if(numberMap.has(i) == false){
        console.log("missing = ",i); 
    }
}
} 
missingandreapeating([2,2],2)


	function printTwoElements(arr,size)
{
	var i;
		console.log("The repeating element is ");
			
	for (i = 0; i < size; i++)
	{
		var abs_value = Math.abs(arr[i]);
		if (arr[abs_value - 1] > 0)
			arr[abs_value - 1] = -arr[abs_value - 1];
		else
			console.log( abs_value);
	}
			
	console.log("<br> and the missing element is ");
	for (i = 0; i < size; i++)
	{
		if (arr[i] > 0)
			console.log (i + 1);
	}
}

/* Driver code */
	arr = new Array ( 7, 3, 4, 5, 5, 6, 2 );
	n = arr.length;
	printTwoElements(arr, n);
	

