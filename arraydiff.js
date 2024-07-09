// const arrayDiff = function (a, b) {
//   const newArr = [];

//   for (let i = 0; i < a.length; i++) {
//     let x = 0;
//     if (a[i] !== b[x]) {
//       newArr.push(a[i]);
//     } else if (!a[i + 1] && b.length != 1) {
//       newArr.push(a[i]);
//     } else {
//       x++;
//       let y = i + 1;
//       while (a[y] != undefined && a[y] === b[x]) {
//         y++;
//         x++;
//         if (!b[x]) {
//           i = y - 1;
//         }
//       }
//     }
//   }
//   return newArr;
// };

const arraySample = [1, 2, 2, 3, 4];
// console.log(arrayDiff(arraySample, [2, 3]));

// top solution as per codewars
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(
  arrayDiff(
    [-13, 15, 1, 12, -8, -12, -12, 15, -2, -13],
    [-13, 15, 1, 12, -8, -12]
  )
);

// console.log(
//   arrayDiff(
//     [
//       7, -1, -11, 17, 8, 11, -7, -13, -16, -12, -5, 10, 5, 16, 3, 8, -2, -4, 18,
//       -12,
//     ],
//     [7, -1, -11]
//   )
// );
// console.log(arrayDiff([1, 2, 2], [2]));

// console.log(
//   arrayDiff(
//     [-12, 15, 0, 16, -13, -11, 14, -11, 4, -5, -1, -17, -17, -2, 3, 6, 10],
//     [-12, 15, 0]
//   )
// );

// console.log(
//   arrayDiff(
//     [3, 10, -5, 8, -16, -1, 4, 8, 3, -12, -10, -10, -11, -1, 19, 2, -2, 18, 15],
//     [3, 10, -5, 8, -16, -1, 4, 8, 3]
//   )
// );

// console.log(
//   arrayDiff(
//     [
//       3, -20, -8, -20, -18, 5, 20, 13, 15, 9, 12, -10, -10, -5, -3, 18, -16,
//       -10, 19,
//     ],
//     [3, -20, -8, -20, -18, 5, 20, 13, 15, 9, 12, -10]
//   )
// );
