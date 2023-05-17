//Solution
//7. Reverse Integer
//https://leetcode.com/problems/reverse-integer/
function reverse(x: number): number {
  if (x === 0) return 0;
  let isNeg = false;
  if (x < 0) {
    isNeg = true;
    x *= -1;
  }
  let stringNum = x.toString().split("").reverse().join("");
  while (stringNum.charAt(0) === "0") stringNum = stringNum.slice(1);
  let ans = isNeg ? -Number(stringNum) : Number(stringNum);
  if (ans >= (-2) ** 31 && ans <= 2 ** 31 - 1) return ans;
  return 0;
}
//Test
(() => {
  let x = 123;
  console.log(reverse(x));
})();
(() => {
  let x = -123;
  console.log(reverse(x));
})();
(() => {
  let x = 120;
  console.log(reverse(x));
})();
(() => {
  let x = 1534236469;
  console.log(reverse(x)); //0
})();
