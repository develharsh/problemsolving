"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x.trim());
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n").filter((e) => e.length);
  main();
//   main();
//   main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/339/A

function main() {
  let input = readline();
  let keys = { 1: 0, 2: 0, 3: 0 };
  for (const v of input) {
    keys[v]++;
  }
  let ans = "";
  for (let i = 0; i < keys[1]; ++i) ans += "1+";
  for (let i = 0; i < keys[2]; ++i) ans += "2+";
  for (let i = 0; i < keys[3]; ++i) ans += "3+";
  ans = ans.slice(0, ans.length - 1);
  print(ans);
}
