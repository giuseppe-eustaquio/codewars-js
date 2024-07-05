const isLetter = function (c) {
  return c.toLowerCase() != c.toUpperCase();
};

const rot13 = function (chars) {
  let newChar = "";
  for (char of chars) {
    if (isLetter(char)) {
      let isCapital = char === char.toUpperCase();
      let n = isCapital ? 64 : 96;
      let x = (char.charCodeAt(0) - n + 13) % 26;
      x = x === 0 ? 26 + n : x + n;

      newChar += String.fromCharCode(x);
    } else {
      newChar += char;
    }
  }
  return newChar;
};

console.log(rot13("m"));

// Other solution using regex

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
