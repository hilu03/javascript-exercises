const fibonacci = function(n) {
  n = +n;
  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }
  let prev1 = 1;
  let prev2 = 1;
  let result;
  for (let i=3; i<=n; i++) {
    result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
