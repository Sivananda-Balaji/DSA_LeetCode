//Replace Elements with Greatest Element on Right Side

var replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const temp = arr[i];
    arr[i] = max;
    max = Math.max(temp, max);
  }
  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];

const result = replaceElements(arr);

console.log(result);
