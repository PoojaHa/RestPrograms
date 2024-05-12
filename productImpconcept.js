function product(arr){  
         
        let output=[];  
        let result=1;     
        let k = 0;     
        for(let i = 0; i<5; i++)     
        {       
        for(let j = 0; j<5; j++)         
        
            {
               if(i==j)
               continue;
               result=result*arr[j] 
            }
            output[k++]=result;
            result=1
        } 
           for(let i=0;i<arr.length;i++){
            console.log(output[i])
           }
    }
product([10,3,5,6,2])

function product2(arr,n){
   
    let left = new Array(n).fill(0)
    let right = new Array(n).fill(0)
    let prod = new Array(n).fill(0)

   left[0]=1
   right[n-1]=1;left
   arr
   for(let i=1;i<n;i++){
   left[i]= arr[i-1] * left[i-1]
   }
   for(let i=n-2;i>=0;i--){
    right[i]= arr[i+1] * right[i+1]
    }
    for(let i=0;i<arr.length;i++){
        prod[i]=left[i]*right[i]
    }

    return prod
 }
 


product2([10,3,5,6,2],5)


function productArray(arr , n)
{

   
  

    var i, temp = 1;

    /* Allocate memory for the product array */
    var prod = Array(n).fill(0);

    /* Initialize the product array as 1 */
    for (let j = 0; j < n; j++)
        prod[j] = 1;

    for(let i=0;i<n;i++){
        prod[i]=temp;
        temp*=arr[i]
    }
    temp=1
    prod
    //mutifply ith prod[i]=[1,10,30,150,900]
  for(let i=n-1;i>=0;i--){
    prod[i]*=temp;
    temp*=arr[i]
  }
  for(let i=0;i<n;i++){
    console.log(prod[i])
  }
}

/* Driver program to test above functions */

    
    var arr = [ 10, 3, 5, 6, 2 ];
    var n = arr.length;
    productArray(arr, n);

function arryssort(n){
     let sum=0
    for(let i=0;i<=n;i++){
        sum=sum+i
    }
  sum
}  
arryssort(5)