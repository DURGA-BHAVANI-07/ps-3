function areElementsUnique(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
}

console.log(areElementsUnique([1, 2, 3, 4])); 
console.log(areElementsUnique([1, 2, 2, 3])); 



function findMissingNumber(arr, N) {
  const expectedSum = (N * (N + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];  
const N = 6;
console.log(findMissingNumber(arr, N));  




function findLongestWord(words) {
  return words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
}

const words = ["apple", "banana", "watermelon", "grape"];
const longestWord = findLongestWord(words);
console.log(longestWord);  


