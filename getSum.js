const getSum = function (a, b) {
  const difference = Math.max(a, b) - Math.min(a, b);
  const startingNum = Math.min(a, b);
  let temp1,
    temp2 = 0;

  for (let i = 0; i <= difference; i++) {
    temp1 = startingNum + i;
    temp2 = temp1 + temp2;
  }
  return temp2;
};
console.log(getSum(4, 7));

// other solutions

// With recursion
function getSumRec(a, b) {
  if (a == b) return a;
  else if (a < b) return a + getSumRec(a + 1, b);
  else return a + getSumRec(a - 1, b);
}

// quick math
function getSumMath(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
