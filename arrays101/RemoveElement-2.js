//Remove Element

var removeElement = function (nums, val) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      start++;
    }
  }
  return start;
};

const nums = [3, 2, 2, 3],
  val = 3;

const result = removeElement(nums, val);

console.log(result);
