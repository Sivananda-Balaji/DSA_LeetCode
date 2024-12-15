//Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      index++;
      nums[index] = nums[i];
    }
  }
  return index + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const result = removeDuplicates(nums);

console.log(result);
