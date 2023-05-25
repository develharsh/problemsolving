//https://leetcode.com/problems/longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let max = 1;
  let dic = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const ind = dic.indexOf(char);

    // Not-Found
    if (ind === -1) {
      dic += char;

      max = Math.max(max, dic.length);
    } else {
      // Found
      dic = dic.slice(ind + 1).concat(char);
    }
  }

  return max;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

s = "bbbbb";
console.log(lengthOfLongestSubstring(s));

s = "pwwkew";
console.log(lengthOfLongestSubstring(s));
