var findMaxConsecutiveOnes = function (nums) {
  let answer = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0) {
      count = 0;
    }
    answer = Math.max(count, answer);
  }
  return answer;
};

const nums = [1, 1, 0, 1, 1, 1];
const result = findMaxConsecutiveOnes(nums);

console.log(result);
