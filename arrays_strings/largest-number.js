//Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
  let value = 0,
    index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > value) {
      index = i;
      value = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > value && i !== index) {
      return -1;
    }
  }
  return index;
};

const nums = [3, 6, 1, 0];

const result = dominantIndex(nums);

console.log(result);
