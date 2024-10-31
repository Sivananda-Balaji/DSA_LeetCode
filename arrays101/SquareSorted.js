// Squares of a Sorted Array

var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let index = nums.length - 1;
  const answer = new Array(nums.length);
  while (left <= right) {
    leftSqu = nums[left] * nums[left];
    rightSqu = nums[right] * nums[right];
    if (leftSqu > rightSqu) {
      answer[index] = leftSqu;
      index--;
      left++;
    } else {
      answer[index] = rightSqu;
      index--;
      right--;
    }
  }
  return answer;
};

const nums = [-4, -1, 0, 3, 10];

const result = sortedSquares(nums);

console.log(result);
