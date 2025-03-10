//Spiral Matrix

var spiralOrder = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let left = 0,
    right = col - 1,
    top = 0,
    bottom = row - 1;
  const ans = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    if (top > bottom) {
      break;
    }
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    if (left > right) {
      break;
    }
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i]);
    }
    bottom--;
    if (top > bottom) {
      break;
    }
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
  }
  return ans;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = spiralOrder(matrix);

console.log(result);
