"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(...x) {
  console.log(x.join(" ").trim());
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
  main();
  main();
  main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/110/A

function main() {
  let input = readline();
  let luckyCount = 0;
  for (const c of input) {
    if (c == "4" || c == "7") ++luckyCount;
  }
  //   print(`--hy${luckyCount}`);
  if (luckyCount == 4 || luckyCount == 7) {
    print("YES");
  } else print("NO");
}
