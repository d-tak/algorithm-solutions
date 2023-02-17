var pivotIndex = function (nums) {
  var total = 0;
  var left = 0;
  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  for (var i = 0; i < nums.length; i++) {
    var right = total - nums[i] - left;
    if (right === left) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};
