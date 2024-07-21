// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// let isPalindrome = function(x) {
//     if (x === 0) {
//         return true;
//     }
    
//     if (x < 0 ||  x%10 ===0) {
//         return false
//     }
    
//     let result = 0;
//     let num = x;
    
//     while (num > 0) {
//         const rest = num % 10;
//         result = result = 10 + rest; 
//         num = Math.floor(num / 10)
//     }
//     return x === result;
// };

// console.log(isPalindrome(121));

alert(1);
console.log('52');

function isPalindrome(x) {
    // Отрицательные числа не могут быть палиндромами
    if (x < 0) return false;
  
    // Преобразуем число в строку
    const str = x.toString();
  
    // Сравниваем строку с ее перевернутой версией
    return str === str.split('').reverse().join('');
  }
  
  // Примеры использования
  console.log(isPalindrome(121)); // true
  console.log(isPalindrome(-121)); // false
  console.log(isPalindrome(10)); // false
  