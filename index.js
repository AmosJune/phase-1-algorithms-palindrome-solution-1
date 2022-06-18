function reverseString(word){
  return word.split('').reverse().join('');
}; 

function isPalindrome(word){
  // Write your algorithm here
  const reversedWord = reverseString(word)
  return word === reversedWord;
};

/* 
  Add your pseudocode here

Split the string, reverse it and join it
and if the reverseString is the same then
return true, else false;

*/

/*
  Add written explanation of your solution here
  isPalindrome is a function that returns true
  if the string is a palindrome(same backward as it reads forward)
  or false if the criteria is not met.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
