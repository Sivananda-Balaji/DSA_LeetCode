var sortedSquares = function (nums) {
  const answer = [];
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    if (Math.abs(nums[i]) <= Math.abs(nums[j])) {
      answer.push(nums[j] * nums[j]);
      j--;
    } else {
      answer.push(nums[i] * nums[i]);
      i++;
    }
  }
  return answer.reverse();
};

const nums = [-7, -3, 2, 3, 11];

const result = sortedSquares(nums);

console.log(result);
