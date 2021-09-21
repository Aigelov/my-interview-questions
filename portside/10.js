// #10 -------------------------------------

function flatten(input) {
  return input.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flatten(curr));
    } else {
      acc.push(curr);
    }
  }, []);
}

console.log(flatten([[[1, 2]], 3, [4, 5]]));

// it('should return flattened data', () => {
//   expect(flatten([[[1, 2]], 3, [4, 5]])).toEqual([1,2,3,4,5]);
//   expect(flatten([1,2,3,4,5]).toEqual([1,2,3,4,5]);
//   expect(flatten([1,[2, [3, [4]]],5]).toEqual([1,2,3,4,5]);
// });