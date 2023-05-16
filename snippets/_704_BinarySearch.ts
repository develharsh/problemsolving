//Solution
//704. Binary Search
//https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
  let len = nums.length,
    i = 0,
    j = len - 1;
  while (i <= j) {
    const mid = Math.floor(i + (j - i) / 2);
    // console.log(mid);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) i = mid + 1;
    else j = mid - 1;
  }
  return -1;
}
//Test
let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

console.log(search(nums, target));
nums = [-1, 0, 3, 5, 9, 12];
target = 2;
console.log(search(nums, target));
nums = [5];
target = 5;
console.log(search(nums, target));
