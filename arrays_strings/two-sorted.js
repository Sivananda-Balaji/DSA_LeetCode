const combineArr = (arr1, arr2) => {
  const answer = [];
  let i = 0,
    j = 0;
  const len1 = arr1.length,
    len2 = arr2.length;
  while (i < len1 && j < len2) {
    if (arr1[i] <= arr1[j]) {
      answer.push(arr1[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
  }
  while (i < len1) {
    answer.push(arr1[i]);
    i++;
  }
  while (j < len2) {
    answer.push(arr2[j]);
    j++;
  }
  return answer;
};

const arr1 = [1, 4, 7, 20],
  arr2 = [3, 5, 6];

const result = combineArr(arr1, arr2);

console.log(result);
