//Max Consecutive Ones II

var findMaxConsecutiveOnes = function (nums) {
  let left = 0,
    right = 0,
    zero_count = 0,
    max_len = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zero_count++;
      while (zero_count > 1) {
        if (nums[left] === 0) {
          zero_count--;
        }
        left++;
      }
    }

    let curr_len = right - left + 1;
    max_len = Math.max(curr_len, max_len);
    right++;
  }
  return max_len;
};

const nums = [1, 0, 1, 1, 0, 1];

const result = findMaxConsecutiveOnes(nums);

console.log(result);
