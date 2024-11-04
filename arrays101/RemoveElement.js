//Remove Element

var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

const result = removeElement(nums, val);

console.log(result);

/**
 * var removeElement = function (nums, val) {
  let answer = new Array(nums.length);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      answer[index++] = nums[i];
    }
  }
  for (let i = 0; i < answer.length; i++) {
    nums[i] = answer[i];
  }
  return index;
};
 */
