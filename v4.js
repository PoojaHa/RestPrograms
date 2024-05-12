
	function longestCommonPrefix(a)
	{
        a.sort((a,b)=>b-a)
        let n=a.length;
        let min=Infinity;
        let s="";
        let flag=0;
        let count=0
        for(let i=0;i<n;i++){
            if(a[i].length < min){
                s=a[i];
                min=a[i].length
            }
        }
       for(let i=0;i<min;i++){
        for(let j=0;j<n;j++){
          if(a[j][i] !==s[i] ){
             flag=1;
             break;
          }
        }
          if(flag==1)
           break;
          count++;
          
       }
       if(count==0){
        return "-1"
       }else{
         return s.slice(0,count)
       }
    }

	let input=["geeksforgeeks", "geeks", "geek", "geezer"];
   console.log( "The longest Common Prefix is : " +longestCommonPrefix(input));
		
