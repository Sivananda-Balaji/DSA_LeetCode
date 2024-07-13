const isSubsequence = (s, t) => {
  let i = 0,
    j = 0;
  const len1 = s.length,
    len2 = t.length;
  while (i < len1 && j < len2) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === len1;
};

const s = "ace",
  t = "abcde";

const result = isSubsequence(s, t);

console.log(result);
