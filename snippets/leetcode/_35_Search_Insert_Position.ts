//Solution
//35. Search Insert Position
//https://leetcode.com/problems/search-insert-position/
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
}
//Test
let nums = [1, 3, 5, 6],
  target = 5;
console.log(searchInsert(nums, target));
nums = [1, 3, 5, 6];
target = 2;
console.log(searchInsert(nums, target));
nums = [1, 3, 5, 6];
target = 7;
console.log(searchInsert(nums, target));
