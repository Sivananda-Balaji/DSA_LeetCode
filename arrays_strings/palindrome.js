const isPalindrome = (str) => {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const str = "racecar";

const result = isPalindrome(str);

console.log(result);
