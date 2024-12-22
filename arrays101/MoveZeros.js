//Move Zeroes

var moveZeroes = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      start++;
    }
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];

const result = moveZeroes(nums);

console.log(result);

/**
 * var moveZeroes = function (nums) {
  const newArr = new Array(nums.length).fill(0);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newArr[index++] = nums[i];
    }
  }
  return newArr;
};
 */
