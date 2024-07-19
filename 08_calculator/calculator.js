const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, i) => total + i, 0);
};

const multiply = function(arr) {
  return arr.reduce((mul, i) => mul * i, 1);
};

const power = function(num, p) {
	let result = 1;
  for (let i=0; i<p; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  let fa = 1;
  for (let i=1; i<=num; i++) {
    fa *= i;
  }
  return fa;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
