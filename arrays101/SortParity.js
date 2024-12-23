//Sort Array By Parity

var sortArrayByParity = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      start++;
    }
  }
  return nums;
};

const nums = [3, 1, 2, 4];

const result = sortArrayByParity(nums);

console.log(result);
