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
//https://codeforces.com/problemset/problem/112/A

function main() {
  let str1 = readline().toLowerCase();
  let str2 = readline().toLowerCase();
  if (str1 === str2) print(0);
  else if (str1 > str2) print(1);
  else print(-1);
}
