// function Strings(arr){
//     let res=""
// for(let i=0;i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         if(arr[0][i]!==arr[j][i]){
//             return arr[0].slice(0,i)
//         }
//     }
// }
// }
// console.log(Strings(["flower","flow","flight"]))

//function wordsfun(haystack, needle) {
    // if(needle== " "){
    //     return  -1
    // }
//    let  words = haystack.indexOf(needle)
//     if(haystack.includes(needle)){
//         return words

//     }
//     return -1
//  };
//  let haystack="sadbutsad"
//  let needle="uiiio"
//  console.log(wordsfun(haystack,needle))
var lengthOfLastWord = function(s) {
    let result = s.trim().split(' ');
    let s1=result[result.length-1]
    console.log(s1)
};
let str="Hello World"
console.log(lengthOfLastWord(str))