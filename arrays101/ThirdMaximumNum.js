//Third Maximum Number

var thirdMax = function (nums) {
  nums.sort((a, b) => a - b);
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!numSet.has(nums[i])) {
      numSet.add(nums[i]);
    }
  }
  const numArr = Array.from(numSet);
  if (numArr.length < 3) {
    return numArr.at(-1);
  } else {
    return numArr.at(-3);
  }
};

const nums = [3, 2, 1];

const result = thirdMax(nums);

console.log(result);
