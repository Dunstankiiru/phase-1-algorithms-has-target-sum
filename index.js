function hasTargetSum(array, target) {
  // Write your algorithm here

  const seenNumbers = new Set();

  for (let num of array) {
    let complement = target - num;

    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
    - Time Complexity: O(n), where n is the length of the array. 
    - We iterate through the array once.
    - Checking and adding to a set is O(1) on average.
  - Space Complexity: O(n) in the worst case (all elements stored in the set).
*/

/* 
  Add your pseudocode here
    1. Create an empty set to keep track of seen numbers.
    2. Loop through each number in the array:
        - Compute the complement (target - number).
        - If the complement exists in the set, return true.
        - Otherwise, add the number to the set.
    3. If we finish the loop without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
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
