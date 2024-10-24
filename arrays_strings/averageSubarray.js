//Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  let maxAverage = 0,
    answer = 0;
  for (let i = 0; i < k; i++) {
    answer += nums[i];
  }
  maxAverage = answer / k;
  let left = 0,
    right = k;
  const len = nums.length;
  while (right < len) {
    answer -= nums[left];
    answer += nums[right];
    left++;
    right++;
    maxAverage = Math.max(maxAverage, answer / k);
  }
  return maxAverage;
};

const nums = [1, 12, -5, -6, 50, 3],
  k = 4;
const result = findMaxAverage(nums, k);

console.log(result);
