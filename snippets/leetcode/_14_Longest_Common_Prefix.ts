//Solution
//https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs: string[]): string {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  let output = [];
  let firstword = sorted[0];
  let lastword = sorted[sorted.length - 1];
  for (var i = 0; i < firstword.length; i++) {
    if (firstword[i] == lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }
  }

  return output.join("");
}
//Test
(() => {
  let strs = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strs));
})();
(() => {
  let strs = ["dog", "racecar", "car"];
  console.log(longestCommonPrefix(strs));
})();
(() => {
  let strs = ["aa", "aa"];
  console.log(longestCommonPrefix(strs));
})();
