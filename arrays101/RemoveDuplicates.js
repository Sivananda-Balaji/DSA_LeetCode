//Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let index = 1;
  let curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (curr !== nums[i]) {
      nums[index] = nums[i];
      curr = nums[index];
      index++;
    }
  }
  return index;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const result = removeDuplicates(nums);

console.log(result);
