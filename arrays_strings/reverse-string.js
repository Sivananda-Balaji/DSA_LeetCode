var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};

const s = ["H", "a", "n", "n", "a", "h"];

const result = reverseString(s);

console.log(result);
