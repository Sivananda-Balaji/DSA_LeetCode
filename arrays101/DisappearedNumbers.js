//Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function (nums) {
  const newArr = new Array(nums.length);
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    newArr[nums[i] - 1] = nums[i];
  }
  for (let i = 0; i < newArr.length; i++) {
    if (isNaN(newArr[i])) {
      answer.push(i + 1);
    }
  }
  return answer;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const result = findDisappearedNumbers(nums);

console.log(result);
