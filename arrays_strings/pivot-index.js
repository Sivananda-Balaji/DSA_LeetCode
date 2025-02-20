//Find Pivot Index

var pivotIndex = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let left = 0,
    right = 0;
  for (let i = 0; i < nums.length; i++) {
    right = total - left - nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];

const result = pivotIndex(nums);

console.log(result);
