// Write a function that takes 2 sorted in ascending order arrays with integer numbers and 1 more number.
// It should check if there is a sum of an element from the first array and an element from the second array
// which is equal to the third argument.

function haveSum(arr1, arr2, sum) {
  // write me
  const subtracts = {};

  for (const item of arr1) {
    subtracts[sum - item] = true;
  }

  for (const item of arr2) {
    if (subtracts[item]) {
      return true;
    }
  }

  return false;
}

// O(n)

haveSum([3, 5, 20], [2, 3, 7, 16, 16], 12) // true
haveSum([0, 1, 2, 3, 5, 7, 16], [4, 7], 13) // false