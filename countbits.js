const countBits = function (n) {
  const bits = Array.from(n.toString(2)).reduce(
    (prev, cur) => Number(prev) + Number(cur)
  );
  return +bits;
};
