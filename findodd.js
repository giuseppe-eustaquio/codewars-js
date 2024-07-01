const findOdd = function (a) {
  const temp = {};
  let final;
  a.map((entry) => {
    temp[entry] >= 1 ? temp[entry]++ : (temp[entry] = 1);
  });
  Object.keys(temp).forEach((cur) => {
    if (!(temp[cur] % 2 === 0)) {
      final = cur;
    }
  });
  return +final;
};

// using ^
const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

// console.log(findOdd([7]));
console.log(findOdd2([7, 1, 1, 7, 4]));
