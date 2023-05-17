//Solution
//189. Rotate Array
//https://leetcode.com/problems/rotate-array/
function rotate(nums: number[], k: number): void {
  //solved with juggling algorithm
  const reverse = (nums: number[], i: number, j: number): void => {
    while (i < j) {
      const tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      ++i;
      --j;
    }
  };
  const threshold = nums.length - (k % nums.length);
  if (threshold === 0 || threshold === nums.length) return;
  reverse(nums, 0, threshold - 1);
  reverse(nums, threshold, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
}
//Test
(() => {
  let nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3;
  rotate(nums, k);
  console.log(nums);
})();
(() => {
  let nums = [-1, -100, 3, 99],
    k = 2;
  rotate(nums, k);
  console.log(nums);
})();
(() => {
  let nums = [-1],
    k = 2;
  rotate(nums, k);
  console.log(nums);
})();
(() => {
  let nums = [1, 2],
    k = 3;
  rotate(nums, k);
  console.log(nums);
})();
