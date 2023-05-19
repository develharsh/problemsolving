//Solution
//4. Median of Two Sorted Arrays
//https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let arr = [];
  const len1 = nums1.length,
    len2 = nums2.length,
    len = len1 + len2;
  let i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (nums1[i] === nums2[j]) {
      arr.push(nums1[i], nums1[i]);
      ++i;
      ++j;
    } else if (nums1[i] > nums2[j]) {
      arr.push(nums2[j++]);
    } else {
      arr.push(nums1[i++]);
    }
  }
  while (i < len1) arr.push(nums1[i++]);
  while (j < len2) arr.push(nums2[j++]);
  return len % 2 === 0
    ? (arr[Math.floor(len / 2) - 1] + arr[Math.floor(len / 2)]) / 2
    : arr[Math.floor(len / 2)];
}
//Test
(() => {
  let nums1 = [1, 3],
    nums2 = [2];
  console.log(findMedianSortedArrays(nums1, nums2));
})();
(() => {
  let nums1 = [1, 2],
    nums2 = [3, 4];
  console.log(findMedianSortedArrays(nums1, nums2));
})();
(() => {
  let nums1 = [0, 0],
    nums2 = [0, 0];
  console.log(findMedianSortedArrays(nums1, nums2));
})();
