//Solution
//977. Squares of a Sorted Array
//https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums: number[]): number[] {
  return nums.map((e) => e ** 2).sort((a, b) => a - b);
}
//Test
(() => {
  let nums = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(nums));
})();
(() => {
  let nums = [-7, -3, 2, 3, 11];
  console.log(sortedSquares(nums));
})();
