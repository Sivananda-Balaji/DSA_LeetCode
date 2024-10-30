var findNumbers = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    const len = String(nums[i]).length;
    if (Number(len) % 2 === 0) {
      answer++;
    }
  }
  return answer;
};

const nums = [12, 345, 2, 6, 7896];

const result = findNumbers(nums);

console.log(result);
