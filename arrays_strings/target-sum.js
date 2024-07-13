const targetSum = (nums, target) => {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    const sum = nums[low] + nums[high];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      high--;
    } else {
      low++;
    }
  }
  return false;
};

const nums = [1, 2, 4, 6, 8, 9, 14, 15],
  target = 13;

const result = targetSum(nums, target);

console.log(result);
