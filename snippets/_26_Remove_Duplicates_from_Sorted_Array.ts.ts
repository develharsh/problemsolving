//Solution
//26. Remove Duplicates from Sorted Array
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
  let adjust = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) ++adjust;
    nums[i - adjust] = nums[i];
  }
  return nums.length - adjust;
}
//Test
(() => {
  let nums = [1, 1, 2];
  console.log(removeDuplicates(nums));
})();
(() => {
  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  console.log(removeDuplicates(nums));
})();
