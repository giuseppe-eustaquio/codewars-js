const isValidIP = function (str) {
  const array = str.split(".");
  if (
    array.length != 4 ||
    array.some((x) => !/^\d+$/.test(x)) ||
    array.some((x) => x.charAt(0) === "0" && x.length > 1) ||
    array.some((x) => x < 0 || x > 255)
  ) {
    return false;
  } else {
    return true;
  }
};

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP(""));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("12.34.56"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123,45,67,89"));
console.log(isValidIP("1e0.1e1.1e2.2e2"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("1.2.3.4 "));
console.log(isValidIP("1.2.3.4 "));
console.log(isValidIP("12.34.56.-7"));
console.log(isValidIP("1.2.3.4\n"));
console.log(isValidIP("\n1.2.3.4"));
