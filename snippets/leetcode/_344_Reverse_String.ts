//Solution
//https://leetcode.com/problems/reverse-string/
function reverseString(s: string[]): void {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    const temp = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }
}
//Test
(() => {
  let s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  console.log(s);
})();
(() => {
  let s = ["H", "a", "n", "n", "a", "h"];
  reverseString(s);
  console.log(s);
})();
