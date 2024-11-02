//  Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  let right1 = m - 1,
    right2 = n - 1,
    index = nums1.length - 1;
  while (right2 >= 0) {
    if (nums1[right1] > nums2[right2]) {
      nums1[index--] = nums1[right1--];
    } else {
      nums1[index--] = nums2[right2--];
    }
  }
  return nums1;
};

const nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;

const result = merge(nums1, m, nums2, n);

console.log(result);
