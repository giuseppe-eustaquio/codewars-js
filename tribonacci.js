// old
// const tribonacci = function (signature, n) {
//   if (n <= 0) {
//     return [];
//   } else if (n <= 3) {
//     while (n != 3) {
//       signature.pop();
//       n++;
//     }
//     return signature;
//   } else
//     for (let i = 0; i < n - 3; i++) {
//       signature.push(
//         [i, i + 1, i + 2]
//           .map((x) => signature[x])
//           .reduce((prevSum, a) => prevSum + a)
//       );
//     }

//   return signature;
// };

// refactored with slice method
const tribonacci = function (signature, n) {
  for (let i = 0; i < n - 3; i++) {
    signature.push(
      [i, i + 1, i + 2]
        .map((x) => signature[x])
        .reduce((prevSum, a) => prevSum + a)
    );
  }

  return signature.slice(0, n);
};
console.log(tribonacci([2, 3, 4], 8));
