/**
 Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */


function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    const firstString = strs[0];

    for (let i = 0; i < firstString.length; i++) {
        const char = firstString[i];
    
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return firstString.slice(0, i); 
            }
        }
    }

    return firstString; 
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"])); 