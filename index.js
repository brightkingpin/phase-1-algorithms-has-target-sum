function hasTargetSum(arr, target) {
  // Write your algorithm here

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
  
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of the hasTargetSum function is O(n^2), where n is the length of the input array. This is because the function uses a nested loop to compare every pair of elements in the array. The outer loop runs n times, and the inner loop runs n - 1 times on the first iteration, n - 2 times on the second iteration, and so on. The total number of comparisons is (n - 1) + (n - 2) + ... + 2 + 1, which is equal to (n^2 - n) / 2. This is O(n^2) in terms of the input size.
*/

/* 
  Add your pseudocode here

  function hasTargetSum(arr, target) {
  // loop through each element in the array
  for i from 0 to arr.length - 1:
    // loop through each subsequent element in the array
    for j from i + 1 to arr.length - 1:
      // check if the sum of the two elements is equal to the target
      if arr[i] + arr[j] equals target:
        // if so, return true
        return true
  // if no pair of elements adds up to the target, return false
  return false
}

*/

/*
  Add written explanation of your solution here

  The function takes two arguments: an array of integers (arr) and a target integer (target).
The function uses a nested loop to compare each pair of elements in the array to see if their sum equals the target integer.
The outer loop iterates through each element of the array, from the first to the second-to-last element.
The inner loop iterates through each subsequent element of the array, from the element immediately following the current outer loop element to the last element of the array.
For each pair of elements, the function checks whether their sum equals the target integer.
If a pair of elements is found whose sum equals the target integer, the function returns true.
If no pair of elements is found whose sum equals the target integer, the function returns false.
The time complexity of this solution is O(n^2), where n is the length of the input array. This is because there are two nested loops that iterate over the array, resulting in a worst-case scenario of n x n iterations.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
