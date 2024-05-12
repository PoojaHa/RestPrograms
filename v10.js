function transformString(str) {
   const charCounts = new Map();
   let transformedString = "";
 
   // Count the occurrence of each character in the string
   for (let i = 0; i < str.length; i++) {
     const char = str[i];
     const count = charCounts.get(char) || 0;
     charCounts.set(char, count + 1);
   }
 
   // Build the transformed string
   for (let i = 0; i < str.length; i++) {
     const char = str[i];
     const count = charCounts.get(char);
 
     // If the count is greater than 0, append the character to the transformed string
     if (count > 0) {
       transformedString += char;
       charCounts.set(char, count - 1);
     }
   }
 
   return transformedString;
 }
 
 // Example usage
 const str1 = "horse";
 const str2 = "intention";
 
 const str1Output = transformString(str1); // "rose"
 const str2Output = transformString(str2); // "execution"
 
 console.log(str1Output);
 console.log(str2Output);
 