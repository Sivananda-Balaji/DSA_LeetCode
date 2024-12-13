//Check If N and Its Double Exist

var checkIfExist = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
  }
  for (let i = 0; i < arr.length; i++) {
    if (map[2 * arr[i]] && arr[i] !== 0) {
      return true;
    } else if (arr[i] === 0 && map[arr[i]] > 1) {
      return true;
    }
  }
  return false;
};

const arr = [10, 2, 5, 3];

const result = checkIfExist(arr);

console.log(result);
