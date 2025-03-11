//Pascal's Triangle

var generate = function (numRows) {
  let ans = [];
  for (let i = 1; i <= numRows; i++) {
    const newArr = new Array(i).fill(0);
    newArr[0] = 1;
    newArr[newArr.length - 1] = 1;
    ans.push(newArr);
  }
  for (let i = 1; i < numRows - 1; i++) {
    for (let j = 0; j < ans[i].length - 1; j++) {
      ans[i + 1][j + 1] = ans[i][j] + ans[i][j + 1];
    }
  }
  return ans;
};

const numRows = 5;

const result = generate(numRows);

console.log(result);
