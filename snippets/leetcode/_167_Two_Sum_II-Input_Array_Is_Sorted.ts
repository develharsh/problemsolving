//Solution
//167. Two Sum II - Input Array Is Sorted
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/*function twoSum(numbers: number[], target: number): number[] {
  const map: any = {}; //O(n) Space
  for (let i = 0; i < numbers.length; ++i) {
    const lookUp = target - numbers[i];
    if (map[lookUp] !== undefined) {
      return [map[lookUp] + 1, i + 1];
    } else {
      const num = numbers[i];
      map[num] = i;
    }
  }
  return [-1, -1];
}*/
function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff) && map.get(diff) !== i) {
      return [i + 1, map.get(diff) + 1];
    }
  }
  return [-1, -1];
}
//Test
(() => {
  let numbers = [2, 7, 11, 15],
    target = 9;
  console.log(twoSum(numbers, target));
})();
(() => {
  let numbers = [2, 3, 4],
    target = 6;
  console.log(twoSum(numbers, target));
})();
(() => {
  let numbers = [-1, 0],
    target = -1;
  console.log(twoSum(numbers, target));
})();
