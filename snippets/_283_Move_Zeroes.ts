//Solution
//283. Move Zeroes
//https://leetcode.com/problems/move-zeroes/
function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let j = 0,
    zr = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 0) {
      ++zr;
    } else {
      nums[j++] = nums[i];
    }
  }
  let x = n - zr;
  while (x < n) nums[x++] = 0;
}
//Test
(() => {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums);
})();
(() => {
  let nums = [0];
  moveZeroes(nums);
  console.log(nums);
})();
