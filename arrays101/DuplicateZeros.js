//Duplicate Zeros

var duplicateZeros = function (arr) {
  const newArr = new Array(arr.length);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (index < arr.length) {
      if (arr[i] === 0) {
        newArr[index++] = 0;
        if (index < arr.length) {
          newArr[index++] = 0;
        }
      } else {
        newArr[index++] = arr[i];
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }
  return arr;
};

const arr = [0, 0, 0, 0, 0, 0, 0];
const arr1 = [1, 0, 2, 3, 0, 4, 5, 0];

const result = duplicateZeros(arr);

console.log(result);
