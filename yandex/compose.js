const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

const compose = (...arg) => (...params) => {
  let result;

  for (let i = arg.length - 1; i >= 0; i--) {
    if (i === arg.length - 1) {
      result = arg[i](...params); // sum(3, 4)
    } else {
      result = arg[i](result);
    }
  }

  return result;
};

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));