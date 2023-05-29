"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x.toString().trim());
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString
    .split("\n")
    .filter((e) => e.length)
    .map((e) => e.trim());
  main();
//   main();
//   main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/266/A

function main() {
  let len = readline(),
    str = readline();
  if (Number(len) === 1) print(0);
  else {
    let ans = 0;
    for (let i = 0; i < len - 1; ++i) {
      ans += str.charAt(i) == str.charAt(i + 1) ? 1 : 0;
    }
    print(ans);
  }
}
