//Diagonal Traverse

var findDiagonalOrder = function (mat) {
  const ans = [];
  const row = mat.length;
  const col = mat[0].length;
  let i = 0,
    j = 0,
    direct = 1;
  while (ans.length < row * col) {
    ans.push(mat[i][j]);
    if (direct === 1) {
      if (j === col - 1) {
        i++;
        direct = -1;
      } else if (i === 0) {
        j++;
        direct = -1;
      } else {
        i--;
        j++;
      }
    } else {
      if (i === row - 1) {
        j++;
        direct = 1;
      } else if (j === 0) {
        i++;
        direct = 1;
      } else {
        i++;
        j--;
      }
    }
  }
  return ans;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = findDiagonalOrder(mat);

console.log(result);
