const duplicateEncode = function (word) {
  const count = word
    .toLowerCase()
    .split("")
    .reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
  console.log(count);
  const newArr = word
    .toLowerCase()
    .split("")
    .map(function (curr) {
      return count[curr] === 1 ? "(" : ")";
    });

  return newArr.join("");
};

console.log(duplicateEncode("fountain"));
console.log(duplicateEncode("pen"));
console.log(duplicateEncode("baaaaad"));
console.log(duplicateEncode("CodeWarrior"));

// other solutions

// using lastIndexOf

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }
