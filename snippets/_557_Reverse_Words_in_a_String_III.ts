//Solution
//https://leetcode.com/problems/reverse-words-in-a-string-iii/
function reverseString(s: string[]): void {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    const temp = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }
}
function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((e: String) => {
      let arr = e.split("");
      reverseString(arr);
      return arr.join("");
    })
    .join(" ");
}
//Test
(() => {
  let s = "Let's take LeetCode contest";
  console.log(reverseWords(s));
})();
(() => {
  let s = "God Ding";
  console.log(reverseWords(s));
})();
