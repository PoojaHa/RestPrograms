const arr=[12,5,6,89];  arr.slice(0,3) //?
 const nums=arr.reduce((acc,value)=>acc+value) //?
 const numsilter=arr.filter((i,v)=> {
    if(v  %2 ==0){
      return i
    }
 })

 numsilter

