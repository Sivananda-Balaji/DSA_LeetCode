//Height Checker

var heightChecker = function (heights) {
  const newHeights = [...heights];
  newHeights.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== newHeights[i]) {
      answer++;
    }
  }
  return answer;
};

const heights = [1, 1, 4, 2, 1, 3];

const result = heightChecker(heights);

console.log(result);
