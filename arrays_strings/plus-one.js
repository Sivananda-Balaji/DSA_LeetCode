//Plus One

var plusOne = function (digits) {
  const len = digits.length;
  if (digits.at(-1) < 9) {
    digits[len - 1] += 1;
  } else {
    let i = len - 1;
    while (digits[i] === 9) {
      digits[i] = 0;
      i--;
    }
    if (i < 0) {
      digits.unshift(1);
    } else {
      digits[i] += 1;
    }
  }
  return digits;
};

const digits = [9];

const result = plusOne(digits);

console.log(result);
